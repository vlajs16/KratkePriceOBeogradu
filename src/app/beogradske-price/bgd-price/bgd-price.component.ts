import { Component, OnInit } from '@angular/core';
import { Prica } from 'src/app/_model/prica';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bgd-price',
  templateUrl: './bgd-price.component.html',
  styleUrls: ['./bgd-price.component.css']
})
export class BgdPriceComponent implements OnInit {
   price: Prica[] = [
    {pricaID: 1, naziv: "Formula 1 u Beogradu", nazivSlike: "formula.jpg" },
    {pricaID: 2, naziv: "Kalemegdanska priča", nazivSlike: "kalemegdan.jpg" },
    {pricaID: 3, naziv: "Ko je sačuvao Savski most?", nazivSlike: "savskimost.jpg" },
    {pricaID: 4, naziv: "Formula 1 u Beogradu", nazivSlike: "formula.jpg" },
    {pricaID: 5, naziv: "Ko je sačuvao Savski most?", nazivSlike: "savskimost.jpg" }
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.price = data['price'];
    })
  }

}
