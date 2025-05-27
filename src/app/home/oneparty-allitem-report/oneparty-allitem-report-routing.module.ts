import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnepartyAllitemReportPage } from './oneparty-allitem-report.page';

const routes: Routes = [
  {
    path: '',
    component: OnepartyAllitemReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnepartyAllitemReportPageRoutingModule {}
