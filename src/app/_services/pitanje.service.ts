import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pitanje } from '../_model/pitanje';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PitanjeService {
  baseUrl = 'http://localhost:5000/api/pitanja/user/';
  constructor(private http: HttpClient) { }

  getPitanja(userId: number): Observable<Pitanje[]>{
    return this.http.get<Pitanje[]>(this.baseUrl + userId);
  }

  sendAnswers(userId: number, data: Pitanje[])
  {
    return this.http.post(this.baseUrl + userId, data);
  }

}
