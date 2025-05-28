import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreditbillReportPage } from './creditbill-report.page';

const routes: Routes = [
  {
    path: '',
    component: CreditbillReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
   
})
export class CreditbillReportPageRoutingModule {}
