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
import { RegistracijaComponent } from './kviz/registracija/registracija.component';
import { PitanjaOdgovoriComponent } from './kviz/pitanjaOdgovori/pitanjaOdgovori.component';
import { FormsModule } from '@angular/forms';
import { RegistrationServiceService } from './_services/registrationService.service';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { ReactiveFormsModule } from '@angular/forms';

export function tokenGetter() {
   return localStorage.getItem('token');
}

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
      PricaComponent,
      RegistracijaComponent,
      PitanjaOdgovoriComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      CollapseModule.forRoot(),
      CarouselModule.forRoot(),
      RouterModule.forRoot(appRoutes),
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
      JwtModule.forRoot({
         config: {
            tokenGetter: tokenGetter,
            whitelistedDomains: ['localhost:5000'],
            blacklistedRoutes: ['localhost:5000/api/auth']
         }
      })
   ],
   providers: [
      RegistrationServiceService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
