import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pitanje } from '../_model/pitanje';
import { Observable } from 'rxjs';
import { Rezultat } from '../_model/rezultat';

@Injectable({
  providedIn: 'root'
})
export class PitanjeService {
  baseUrl = 'http://localhost:5000/api/pitanja/user/';
  constructor(private http: HttpClient) { }

  getPitanja(userId: number): Observable<Pitanje[]>{
    return this.http.get<Pitanje[]>(this.baseUrl + userId);
  }

  sendAnswers(userId: number, data: Pitanje[]): Observable<Rezultat>
  {
    return this.http.post<Rezultat>(this.baseUrl + userId, data);
  }

}
