import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BgdPriceComponent } from './beogradske-price/bgd-price/bgd-price.component';
import { PricaComponent } from './beogradske-price/prica/prica.component';
import { RegistracijaComponent } from './kviz/registracija/registracija.component';
import { PitanjaOdgovoriComponent } from './kviz/pitanjaOdgovori/pitanjaOdgovori.component';
import { PitanjaResolver } from './_resolvers/pitanja.resolver';
import { KorisnikResolver } from './_resolvers/korisnik.resolver';
import { PriceResolver } from './_resolvers/price.resolver';
import { PricaService } from './_services/prica.service';
import { PricaResolver } from './_resolvers/prica.resolver';

export const appRoutes: Routes = [
    {path: '', component: HomeComponent, runGuardsAndResolvers: 'always', resolve: {korisnici: KorisnikResolver}},
    {path: 'price', component: BgdPriceComponent, runGuardsAndResolvers: 'always', resolve: {price: PriceResolver}},
    {path: 'price/:id', component: PricaComponent, runGuardsAndResolvers: 'always', resolve: {prica: PricaResolver}},
    {path: 'kviz/registracija', component: RegistracijaComponent},
    {path: 'kviz/pitanja', component: PitanjaOdgovoriComponent, runGuardsAndResolvers: 'always', resolve: { pitanja: PitanjaResolver}},
    {path: '**', component: HomeComponent}
]