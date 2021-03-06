import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { ErrorRoutingModule } from './error-routing/error-routing.module';
import { TopCryptocurrenciesComponent } from './top-cryptocurrencies/top-cryptocurrencies.component';
import { PriceChartComponent } from './price-chart/price-chart.component';
import { MyWatchlistComponent } from './my-watchlist/my-watchlist.component';
import { NewFinancialChartComponent } from './newfinancialchart/newfinancialchart.component';

export const routes: Routes = [
  { path: '', redirectTo: 'top-cryptocurrencies', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'top-cryptocurrencies', component: TopCryptocurrenciesComponent, data: { text: 'TopCryptocurrencies' } },
  { path: 'price-chart', component: PriceChartComponent, data: { text: 'PriceChart' } },
  { path: 'my-watchlist', component: MyWatchlistComponent, data: { text: 'MyWatchlist' } },
  { path: 'newfinancialchart', component: NewFinancialChartComponent, data: { text: 'newFinancialChart' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ErrorRoutingModule],
  exports: [RouterModule, ErrorRoutingModule]
})
export class AppRoutingModule {
}
