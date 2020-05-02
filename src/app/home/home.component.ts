import { Component, OnInit, Inject, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { ScrollServiceService } from '../_services/scrollService.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  id: string;
  prevousUrl: string;
  @ViewChild('rang') 
    el: ElementRef;  

  constructor(private scrollSe: ScrollServiceService) {  }

  ngAfterViewInit(){
    
    if( this.scrollSe.getPreviousUrl() === '/kviz/pitanja' ){
      setTimeout(() => {
        this.scroll();
      }, 100);
    }
  }  

  scroll(){
      const elem = this.el.nativeElement as HTMLElement;
      elem.scrollIntoView({behavior:'smooth'});
  }
}
