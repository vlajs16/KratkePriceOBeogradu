import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BgdPriceComponent } from './beogradske-price/bgd-price/bgd-price.component';
import { PricaComponent } from './beogradske-price/prica/prica.component';

export const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'price', component: BgdPriceComponent},
    {path: 'price/id', component: PricaComponent},
    {path: '**', component: HomeComponent}
]