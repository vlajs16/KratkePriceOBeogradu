import { Component, OnInit } from '@angular/core';
import { RegistrationServiceService } from 'src/app/_services/registrationService.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AlertifyService } from 'src/app/_services/alertify.service';

@Component({
  selector: 'app-registracija',
  templateUrl: './registracija.component.html',
  styleUrls: ['./registracija.component.css']
})
export class RegistracijaComponent implements OnInit {
  user: any = {};
  provera = false;
  provera2 = false;
  telProvera = true;
  angForm = new FormGroup({
    name: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    telefon: new FormControl('', Validators.pattern('[0-9]*'))
  });

  constructor(private authService: RegistrationServiceService, private router: Router, private fb: FormBuilder,
              private alertify: AlertifyService) { }

  ngOnInit() { }

  register() {
    const formData = new FormData();
    formData.append('imePrezime', this.angForm.get('name').value);
    formData.append('korisnickoIme', this.angForm.get('username').value);
    formData.append('email', this.angForm.get('email').value);
    formData.append('telefon', this.angForm.get('telefon').value);

    this.authService.register(formData).subscribe(() => {
      this.alertify.success('Uspešno ste se registrovali! \nSrećno na kvizu!');
      console.log('Uspesna registracija');
      this.router.navigate(['/kviz/pitanja']);
    }, error => {
      if (error.status === 0) {
        this.alertify.warning('Došlo je do greške na strani servera!');
        return;
      }
      this.alertify.error(error.error);
      console.log(error.error);
    });
  }
}
