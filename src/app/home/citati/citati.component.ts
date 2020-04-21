import { Component, OnInit } from '@angular/core';
import { Citat } from 'src/app/_model/citat';

@Component({
  selector: 'app-citati',
  templateUrl: './citati.component.html',
  styleUrls: ['./citati.component.css']
})
export class CitatiComponent implements OnInit {
  citati: Citat[] = [
    {author: "Momo Kapor", content: "Beograd nije u Beogradu, jer Beograd, u stvari i nije grad – on je metafora, način života, ugao gledanja na stvari."},
    {author: "Duško Radović", content: "Ko je imao sreće da se jutros probudi u Beogradu, može se smatrati da je za danas dovoljno postigao u životu. Svako dalje insistiranje na još nečemu, bilo bi neskromno."},
    {author: "Ivo Andrić", content: "Ovaj veliki grad bio je, izgleda, oduvek ovakav: istrgan, prosut, upravo kao da nikad ne postoji, nego večno nastaje, dograđuje se i oporavlja. "}
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
