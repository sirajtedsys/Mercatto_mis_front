import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalesStatusPage } from './sales-status.page';

const routes: Routes = [
  {
    path: '',
    component: SalesStatusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalesStatusPageRoutingModule {}
