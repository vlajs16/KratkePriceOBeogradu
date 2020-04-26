import { Component, OnInit } from '@angular/core';
import { Korisnik } from 'src/app/_model/korisnik';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rang-lista',
  templateUrl: './rang-lista.component.html',
  styleUrls: ['./rang-lista.component.css']
})
export class RangListaComponent implements OnInit {
  korisnici: Korisnik[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.korisnici = data['korisnici'];
    });
    let i = 1;
    this.korisnici.forEach(korisnik => {
      korisnik.redniBroj = i;
      i++;
    });
  }

  provera(){
    if(this.korisnici === undefined || this.korisnici === null || this.korisnici.length === 0)
      return false;
    return true;
  }

}
