import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreditBillSettlmentPageRoutingModule } from './credit-bill-settlment-routing.module';

import { CreditBillSettlmentPage } from './credit-bill-settlment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreditBillSettlmentPageRoutingModule
  ],
  declarations: [CreditBillSettlmentPage]
})
export class CreditBillSettlmentPageModule {}
