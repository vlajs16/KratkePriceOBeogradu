import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Korisnik } from '../_model/korisnik';
import { KorisnikService } from '../_services/korisnik.service';

@Injectable()
export class KorisnikResolver implements Resolve<Korisnik[]>{
    constructor(
        private korisnikService: KorisnikService, 
        private router: Router){}

    resolve(route: ActivatedRouteSnapshot): Observable<Korisnik[]>{
        return this.korisnikService.getKorisnici()
        .pipe(
            catchError(error => {
                
                return of(null);
            })
        )
    }
}