import { Component, OnInit } from '@angular/core';
import { Korisnik } from 'src/app/_model/korisnik';

@Component({
  selector: 'app-rang-lista',
  templateUrl: './rang-lista.component.html',
  styleUrls: ['./rang-lista.component.css']
})
export class RangListaComponent implements OnInit {
  korisnici: Korisnik[] = [
    {imePrezime: 'Mika Mikić', redniBroj: 1, poeni: 240},
    {imePrezime: 'Pera Perić', redniBroj: 2, poeni: 205},
    {imePrezime: 'Pera Mikić', redniBroj: 3, poeni: 188},
    {imePrezime: 'Mika Perić', redniBroj: 4, poeni: 150},
    {imePrezime: 'Žika Perić', redniBroj: 5, poeni: 140}
  ]

  constructor() { }

  ngOnInit() {
  }

}
