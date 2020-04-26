import { Component, OnInit  } from '@angular/core';
import { Pitanje } from 'src/app/_model/pitanje';
import { PitanjeService } from 'src/app/_services/pitanje.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistrationServiceService } from 'src/app/_services/registrationService.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-pitanjaOdgovori',
  templateUrl: './pitanjaOdgovori.component.html',
  styleUrls: ['./pitanjaOdgovori.component.css']
})
export class PitanjaOdgovoriComponent implements OnInit {
  pitanja: Pitanje[];
  popunjena: Pitanje[];
  rbrPitanja: number;

  constructor(private pitanjaService: PitanjeService, private route: ActivatedRoute,
              private authService: RegistrationServiceService) {
                    // this.router.routeReuseStrategy.shouldReuseRoute = function() {
    //   return false;
    // };
  }

  ngOnInit() {
    this.getPitanja();
    this.rbrPitanja = 0;
  }


  // brojPitanja(){
  //   this.rbrPitanja = this.rbrPitanja + 1;
  //   return this.rbrPitanja;
  // }

  getPitanja(){
    this.pitanjaService.getPitanja(this.authService.decodedToken.nameid).subscribe((pitanja: Pitanje[]) => {
      this.pitanja = pitanja;
      this.popunjena = pitanja;
      this.izmeniOdgovore();
    }, error => {
      console.log(error);
    });
  }

  izmeniOdgovore(){
    this.pitanja.forEach(pitanje => {
      pitanje.odgovori.forEach(odgovor => {
        odgovor.tacan = false;
      });
    });
  }

  send(kvizForm: NgForm){
    console.log(kvizForm.control.value);
    this.pitanjaService.sendAnswers(this.authService.decodedToken.nameid, this.pitanja).subscribe(() => {
      console.log('Uspešno poslati odgovori');
    }, error => {
      console.log(error);
    });

  }


  // onSelectionChange(odg: Odgovor){
  //   this.popunjena.forEach(pitanje => {
  //     if ( pitanje.pitanjeId === odg.pitanjeId) {
  //       pitanje.odgovori.forEach(odgovor => {
  //         if (!odg.tacan) {
  //           odgovor.tacan = false;
  //         }
  //         if ( odgovor.odgovorId === odg.odgovorId) {
  //           console.log(odgovor.vrednost);
  //           odgovor.tacan = !odgovor.tacan;
  //           console.log(""+odgovor.tacan);
  //         }
  //         // console.log(odgovor.tacan);
  //       });
  //     }
  //   });
  // }
}
