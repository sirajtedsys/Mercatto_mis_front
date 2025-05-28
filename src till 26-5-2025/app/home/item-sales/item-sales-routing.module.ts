import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemSalesPage } from './item-sales.page';

const routes: Routes = [
  {
    path: '',
    component: ItemSalesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemSalesPageRoutingModule {}
