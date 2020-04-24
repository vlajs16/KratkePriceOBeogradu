import { Component, OnInit } from '@angular/core';
import { Prica } from 'src/app/_model/prica';

@Component({
  selector: 'app-bgd-price',
  templateUrl: './bgd-price.component.html',
  styleUrls: ['./bgd-price.component.css']
})
export class BgdPriceComponent implements OnInit {
   price: Prica[] = [
    {pricaId: 1, naziv: "Formula 1 u Beogradu", nazivSlike: "formula.jpg" },
    {pricaId: 2, naziv: "Kalemegdanska priča", nazivSlike: "kalemegdan.jpg" },
    {pricaId: 3, naziv: "Ko je sačuvao Savski most?", nazivSlike: "savskimost.jpg" },
    {pricaId: 4, naziv: "Formula 1 u Beogradu", nazivSlike: "formula.jpg" },
    {pricaId: 5, naziv: "Ko je sačuvao Savski most?", nazivSlike: "savskimost.jpg" }
  ];

  constructor() { }

  ngOnInit() {
  }

}
