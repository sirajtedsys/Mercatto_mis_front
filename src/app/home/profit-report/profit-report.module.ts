import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfitReportPageRoutingModule } from './profit-report-routing.module';

import { ProfitReportPage } from './profit-report.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfitReportPageRoutingModule
  ],
  declarations: [ProfitReportPage]
})
export class ProfitReportPageModule {}
