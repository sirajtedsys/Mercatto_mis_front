import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemGroupReportPage } from './item-group-report.page';

const routes: Routes = [
  {
    path: '',
    component: ItemGroupReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemGroupReportPageRoutingModule {}
