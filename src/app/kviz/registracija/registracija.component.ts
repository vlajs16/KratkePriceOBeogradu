import { Component, OnInit } from '@angular/core';
import { RegistrationServiceService } from 'src/app/_services/registrationService.service';
import { Pitanje } from 'src/app/_model/pitanje';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registracija',
  templateUrl: './registracija.component.html',
  styleUrls: ['./registracija.component.css']
})
export class RegistracijaComponent implements OnInit {
  user: any = {};
  provera = false;

  constructor(private authService: RegistrationServiceService, private router: Router) { }

  ngOnInit() {
  }

  register() {
    this.authService.register(this.user).subscribe(() => {
      console.log('Uspesna registracija');
      this.provera = true;
    }, error => {
      console.log(error);
      this.provera = false;
    });
  }

  isRegistred(){
    if (this.provera === true){
      return true;
    }
    return false;
  }
}
