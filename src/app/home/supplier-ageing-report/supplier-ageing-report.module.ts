import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SupplierAgeingReportPageRoutingModule } from './supplier-ageing-report-routing.module';

import { SupplierAgeingReportPage } from './supplier-ageing-report.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SupplierAgeingReportPageRoutingModule
  ],
  declarations: [SupplierAgeingReportPage]
})
export class SupplierAgeingReportPageModule {}
