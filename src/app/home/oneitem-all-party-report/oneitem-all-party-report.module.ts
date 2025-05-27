import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OneitemAllPartyReportPageRoutingModule } from './oneitem-all-party-report-routing.module';

import { OneitemAllPartyReportPage } from './oneitem-all-party-report.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OneitemAllPartyReportPageRoutingModule
  ],
  declarations: [OneitemAllPartyReportPage]
})
export class OneitemAllPartyReportPageModule {}
