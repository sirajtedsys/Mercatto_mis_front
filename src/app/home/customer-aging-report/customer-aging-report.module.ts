import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomerAgingReportPageRoutingModule } from './customer-aging-report-routing.module';

import { CustomerAgingReportPage } from './customer-aging-report.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomerAgingReportPageRoutingModule
  ],
  declarations: [CustomerAgingReportPage]
})
export class CustomerAgingReportPageModule {}
