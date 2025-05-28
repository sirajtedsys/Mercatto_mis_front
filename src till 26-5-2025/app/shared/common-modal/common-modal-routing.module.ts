import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommonModalPage } from './common-modal.page';

const routes: Routes = [
  {
    path: '',
    component: CommonModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommonModalPageRoutingModule {}
