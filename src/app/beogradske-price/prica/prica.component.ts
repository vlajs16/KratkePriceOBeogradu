import { Component, OnInit } from '@angular/core';
import { Prica } from 'src/app/_model/prica';
import { ActivatedRoute, Router } from '@angular/router';
import { PricaService } from 'src/app/_services/prica.service';
import { AlertifyService } from 'src/app/_services/alertify.service';

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

  constructor(private route: ActivatedRoute, private router: Router, private pricaService: PricaService,
              private alertify: AlertifyService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.prica = data['prica'];
    });
  }

  metoda(next: boolean){
    this.pricaService.getWanted(this.prica.pricaID, next).subscribe((id) => {
      this.router.navigate(['/price/', id]);
    }, error => {
      if (error.status === 0) {
        this.alertify.warning('Došlo je do greške na strani servera!');
        return;
      }
      this.alertify.error(error.error);
      console.log(error.error);
      return;
    });
  }
}
