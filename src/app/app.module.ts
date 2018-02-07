import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {MaterialModule} from './material.module';
import {FormsModule} from '@angular/forms';
import {IntroductionComponent} from './introduction/introduction.component';
import {PerformancesComponent} from './performances/performances.component';
import {SeatmapComponent} from './seatmap/seatmap.component';
import {SeatpricingComponent} from './seatpricing/seatpricing.component';
import {PurchaseticketsComponent} from './purchasetickets/purchasetickets.component';
import {TransactionlogComponent} from './transactionlog/transactionlog.component';
import {SettingsComponent} from './settings/settings.component';

import {HttpClientModule} from "@angular/common/http";
import {PerformanceService} from "./service/performance.service";
import {PriceplanService} from "./service/priceplan.service";
import {TransactionlogService} from "./service/transactionlog.service";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,
    PerformancesComponent,
    SeatmapComponent,
    SeatpricingComponent,
    PurchaseticketsComponent,
    TransactionlogComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'introduction',
        component: IntroductionComponent
      },
      {
        path: 'performances',
        component: PerformancesComponent
      },
      {
        path: 'purchase',
        component: PurchaseticketsComponent
      },
      {
        path: 'seatmap',
        component: SeatmapComponent
      },
      {
        path: 'seatpricing',
        component: SeatpricingComponent
      },
      {
        path: 'log',
        component: TransactionlogComponent
      },
      {
        path: 'settings',
        component: SettingsComponent
      }
    ])

  ],
  providers: [
    PerformanceService,
    PriceplanService,
    TransactionlogService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
