import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BgdPriceComponent } from './beogradske-price/bgd-price/bgd-price.component';
import { PricaComponent } from './beogradske-price/prica/prica.component';
import { RegistracijaComponent } from './kviz/registracija/registracija.component';
import { PitanjaOdgovoriComponent } from './kviz/pitanjaOdgovori/pitanjaOdgovori.component';

export const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'price', component: BgdPriceComponent},
    {path: 'price/id', component: PricaComponent},
    {path: 'kviz/registracija', component: RegistracijaComponent},
    // {path: 'kviz/pitanja', component: PitanjaOdgovoriComponent},
    {path: '**', component: HomeComponent}
]