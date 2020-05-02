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
  tacnaPitanja: Pitanje[];
  points: number;
  gotov = false;

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
    .subscribe((rezultat) => {
      this.tacnaPitanja = rezultat.pitanja;
      this.points = rezultat.poeni;
      this.gotov = true;
      this.poeni = 'Bravo, osvojili ste: ' + this.points + ' poena. \n\nPogledajte da li ste dospeli na rang listu!';
      this.prikazi = true;
      console.log(">>>>>>>> " + this.tacnaPitanja.toString());
    }, error => {
      this.poeni = error.toString();
      this.prikazi = true;
    });
  }


  toggle(){
    this.prikazi = !this.prikazi;
  }

  wrongQuestion(id: number){
    if ( !this.gotov ) { return false; }
    const pomUser = this.pitanja.find(x => x.pitanjeID === id);
    const pomBase = this.tacnaPitanja.find(x => x.pitanjeID === id);

    if (pomUser.odgovor.odgovorID !== pomBase.odgovor.odgovorID) {
      return true;
    }
    return false;
  }

  wrongAnswer(pitanjeId: number, odgovorId: number){
    if ( !this.gotov ) { return false; }

    const pomBase = this.tacnaPitanja.find(x => x.pitanjeID === pitanjeId);
    if (pomBase.odgovor.odgovorID !== odgovorId) {
      return true;
    }
    return false;
  }

  selectedByUser(pitanjeId: number, odgovorId: number){
    if ( !this.gotov ) { return false; }
    
    const userSelectedQuestion = this.pitanja.find(x => x.pitanjeID === pitanjeId);
    if(userSelectedQuestion.odgovor.odgovorID === odgovorId)
      return true;
    return false;
  }

  goHome(){
    localStorage.removeItem('token');
    this.authService.decodedToken = null;
    this.router.navigate(['/']);
  }

  close(){
    if(this.prikazi){
      this.prikazi = false;
    }
  }

  validateForm(id: number){
    let index = this.pitanja.findIndex(x => x.pitanjeID === id);
    if(index !== (this.pitanja.length - 1)){
      do {
        const pom = this.pitanja[index + 1];
        if(this.quizForm.get('pitanje' + pom.pitanjeID).touched 
            && this.quizForm.get('pitanje' + id).hasError('required')){
              return true;
            }
        index++;
      } while (index !== (this.pitanja.length - 1));
    } else if (this.quizForm.get('pitanje' + id).touched && 
                this.quizForm.get('pitanje' + id).hasError('required')){
                  return true;
     }
     return false;

  }
}
