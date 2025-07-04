import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StockAdjustmentPageRoutingModule } from './stock-adjustment-routing.module';

import { StockAdjustmentPage } from './stock-adjustment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StockAdjustmentPageRoutingModule
  ],
  declarations: [StockAdjustmentPage]
})
export class StockAdjustmentPageModule {}
