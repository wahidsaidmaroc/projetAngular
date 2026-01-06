import { Routes } from '@angular/router';
import { Client } from './client/client';
import { StockComponent } from './stock/stock';

export const routes: Routes = [
    { path: 'client', component: Client },
    {path:'stock',component: StockComponent}
];
