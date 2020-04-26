import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Korisnik } from '../_model/korisnik';

@Injectable({
  providedIn: 'root'
})
export class KorisnikService {
baseUrl = 'http://localhost:5000/api/korisnici/';
constructor(private http: HttpClient) { }

getKorisnici(): Observable<Korisnik[]>{
return this.http.get<Korisnik[]>(this.baseUrl);
}

}
