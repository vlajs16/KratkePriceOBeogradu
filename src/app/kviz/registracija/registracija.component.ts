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
  provera2 = false;

  constructor(private authService: RegistrationServiceService, private router: Router) { }

  ngOnInit() {
  }

  register() {
    this.authService.register(this.user).subscribe(() => {
      console.log('Uspesna registracija');
      this.provera = true;
      this.router.navigate(['/kviz/pitanja']);
    }, error => {
      console.log(error);
      this.provera = false;
    });
  }

  change(){
    this.provera2 = !this.provera2;
  }

  isRegistred(){
    if (this.provera === true){
      return true;
    }
    return false;
  }

  close(){
    if(this.provera2)
      this.provera2 = false;
  }
}
