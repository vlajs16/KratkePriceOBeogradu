import { Component, OnInit  } from '@angular/core';
import { Pitanje } from 'src/app/_model/pitanje';
import { PitanjeService } from 'src/app/_services/pitanje.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistrationServiceService } from 'src/app/_services/registrationService.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-pitanjaOdgovori',
  templateUrl: './pitanjaOdgovori.component.html',
  styleUrls: ['./pitanjaOdgovori.component.css']
})
export class PitanjaOdgovoriComponent implements OnInit {
  pitanja: Pitanje[];
  quizForm: FormGroup;
  poeni: string;
  prikazi = false;

  constructor(private pitanjaService: PitanjeService, private route: ActivatedRoute,
              private authService: RegistrationServiceService, private router: Router) {
  }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.pitanja = data['pitanja'];
    });
    this.createQuizForm();
  }


  createQuizForm(){
    let group: any = {};

    this.pitanja.forEach(pitanje => {
      group['pitanje' + pitanje.pitanjeID] = new FormControl('', Validators.required);
    });

    this.quizForm = new FormGroup(group);
  }


  createAnswers(){
    if (!this.quizForm.valid){ return; }

    this.pitanja.forEach(pitanje => {
      let odgovorId: number = this.quizForm.get('pitanje' + pitanje.pitanjeID).value;
      pitanje.odgovor = pitanje.odgovori.find(x => x.odgovorID == odgovorId);
    });
  }

  sendAnswer(){
    this.createAnswers();

    this.pitanjaService.sendAnswers(this.authService.decodedToken.nameid, this.pitanja)
    .subscribe((num) => {
      if( !isNaN(parseFloat(num.toString())) ){
        this.poeni = 'Bravo, osvojili ste: ' + num.toString() + ' poena. \n\nPogledajte da li ste dospeli na rang listu!';
      }
      this.prikazi = true;
      console.log(num.toString() + " poena")
    }, error => {
      this.poeni = error.toString();
      this.prikazi = true;
    });
  }


  toggle(){
    this.prikazi = !this.prikazi;
  }

  close(){
    if(this.prikazi){
      this.prikazi = false;
      this.router.navigate(['/']);
    }
  }
}
