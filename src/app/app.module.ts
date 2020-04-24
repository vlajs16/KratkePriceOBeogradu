import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CarouselComponent } from './home/carousel/carousel.component';
import { AboutComponent } from './home/about/about.component';
import { CitatiComponent } from './home/citati/citati.component';
import { RangListaComponent } from './home/rang-lista/rang-lista.component';
import { PartneriComponent } from './home/partneri/partneri.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { BgdPriceComponent } from './beogradske-price/bgd-price/bgd-price.component';
import { PricaComponent } from './beogradske-price/prica/prica.component';

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      FooterComponent,
      HomeComponent,
      CarouselComponent,
      AboutComponent,
      CitatiComponent,
      RangListaComponent,
      PartneriComponent,
      BgdPriceComponent,
      PricaComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      CollapseModule.forRoot(),
      CarouselModule.forRoot(),
      RouterModule.forRoot(appRoutes)
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
