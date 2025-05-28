import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomerSalesReportPageRoutingModule } from './customer-sales-report-routing.module';

import { CustomerSalesReportPage } from './customer-sales-report.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomerSalesReportPageRoutingModule
  ],
  declarations: [CustomerSalesReportPage]
})
export class CustomerSalesReportPageModule {}
