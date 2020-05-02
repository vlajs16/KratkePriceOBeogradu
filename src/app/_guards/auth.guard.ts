import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { RegistrationServiceService } from '../_services/registrationService.service';
import { AlertifyService } from '../_services/alertify.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate{
    constructor(
        private authService: RegistrationServiceService,
        private router: Router,
        private alertify: AlertifyService
    ){}

    canActivate(): boolean{
        if(this.authService.loggedIn()){
            return true;
        }
        this.alertify.message('Niste registrovani za kviz');
        this.router.navigate(['/kviz/registracija']);
        return false;
    }
}