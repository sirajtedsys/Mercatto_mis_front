import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreditBillSettlmentPage } from './credit-bill-settlment.page';

const routes: Routes = [
  {
    path: '',
    component: CreditBillSettlmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreditBillSettlmentPageRoutingModule {}
