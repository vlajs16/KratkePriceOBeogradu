import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Prica } from '../_model/prica';
import { PricaService } from '../_services/prica.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class PriceResolver implements Resolve<Prica[]>{
    constructor(
        private pricaService: PricaService, 
        private router: Router){}

    resolve(route: ActivatedRouteSnapshot): Observable<Prica[]>{
        return this.pricaService.getPrice()
        .pipe(
            catchError(error => {
                this.router.navigate(['/']);
                return of(null);
            })
        )
    }
}