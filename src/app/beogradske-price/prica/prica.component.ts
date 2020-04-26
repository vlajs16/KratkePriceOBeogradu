import { Component, OnInit } from '@angular/core';
import { Prica } from 'src/app/_model/prica';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prica',
  templateUrl: './prica.component.html',
  styleUrls: ['./prica.component.css']
})
export class PricaComponent implements OnInit {
  prica: Prica = {
    'pricaID' : 1,
    'naziv': "Formula 1 u Beogradu",
    'videoUrl': ''
  }

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.prica = data['prica'];
    })
  }

}
