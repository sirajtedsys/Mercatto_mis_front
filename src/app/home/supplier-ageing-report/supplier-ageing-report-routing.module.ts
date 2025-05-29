import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupplierAgeingReportPage } from './supplier-ageing-report.page';

const routes: Routes = [
  {
    path: '',
    component: SupplierAgeingReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupplierAgeingReportPageRoutingModule {}
