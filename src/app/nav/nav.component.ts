import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isCollapsed = true;
  scrolledEnough = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

  isHomePage(){
    const url = this.route.snapshot['_routerState'].url;
    if(url === '/') { return true; }
    return false;
  }

  @HostListener('window:scroll', ["$event"])
  onWindowScroll(event){
    if(window.scrollY>350)
      this.scrolledEnough = true;
    else this.scrolledEnough = false;
  }

}
