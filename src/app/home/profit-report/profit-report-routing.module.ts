import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfitReportPage } from './profit-report.page';

const routes: Routes = [
  {
    path: '',
    component: ProfitReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfitReportPageRoutingModule {}
