import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreditbillReportPageRoutingModule } from './creditbill-report-routing.module';

import { CreditbillReportPage } from './creditbill-report.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreditbillReportPageRoutingModule
  ],
  declarations: [CreditbillReportPage]
})
export class CreditbillReportPageModule {}
