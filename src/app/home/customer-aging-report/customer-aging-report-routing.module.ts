import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerAgingReportPage } from './customer-aging-report.page';

const routes: Routes = [
  {
    path: '',
    component: CustomerAgingReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerAgingReportPageRoutingModule {}
