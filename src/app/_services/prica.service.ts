import { Injectable } from '@angular/core';
import { Prica } from '../_model/prica';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PricaService {
  baseUrl = 'http://localhost:5000/api/price/';

  constructor(private http: HttpClient) { }

  getPrice(): Observable<Prica[]>{
    return this.http.get<Prica[]>(this.baseUrl);
  }

  getPrica(id): Observable<Prica>{
    return this.http.get<Prica>(this.baseUrl + id);
  } 

  getWanted(id, next): Observable<Prica>{
    return this.http.get<Prica>(this.baseUrl + id + '/' + next);
  }

}
