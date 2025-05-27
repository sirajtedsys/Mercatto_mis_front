import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerSalesReportPage } from './customer-sales-report.page';

const routes: Routes = [
  {
    path: '',
    component: CustomerSalesReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerSalesReportPageRoutingModule {}
