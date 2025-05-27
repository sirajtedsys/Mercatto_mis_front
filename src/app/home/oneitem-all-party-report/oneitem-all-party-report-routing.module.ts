import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OneitemAllPartyReportPage } from './oneitem-all-party-report.page';

const routes: Routes = [
  {
    path: '',
    component: OneitemAllPartyReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OneitemAllPartyReportPageRoutingModule {}
