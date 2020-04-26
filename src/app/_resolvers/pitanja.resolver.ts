import { Injectable } from '@angular/core';
import { Pitanje } from '../_model/pitanje';
import { PitanjeService } from '../_services/pitanje.service';
import { Router, ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { RegistrationServiceService } from '../_services/registrationService.service';
import { catchError } from 'rxjs/operators';

@Injectable()
export class PitanjaResolver implements Resolve<Pitanje[]>{
    constructor(
        private pitanjeService: PitanjeService, 
        private router: Router, 
        private authService: RegistrationServiceService){}

    resolve(route: ActivatedRouteSnapshot): Observable<Pitanje[]>{
        return this.pitanjeService.getPitanja(this.authService.decodedToken.nameid)
        .pipe(
            catchError(error => {
                console.log("problem");
                this.router.navigate(['/kviz/registracija']);
                return of(null);
            })
        )
    }
}