import { Component, OnInit } from '@angular/core';
import { Prica } from 'src/app/_model/prica';

@Component({
  selector: 'app-prica',
  templateUrl: './prica.component.html',
  styleUrls: ['./prica.component.css']
})
export class PricaComponent implements OnInit {
  prica: Prica = {
    'pricaId' : 1,
    'naziv': "Formula 1 u Beogradu",
    'urlVideo': ''
  }

  constructor() { }

  ngOnInit() {
  }

}
