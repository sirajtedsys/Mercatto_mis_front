import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemGroupReportPageRoutingModule } from './item-group-report-routing.module';

import { ItemGroupReportPage } from './item-group-report.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemGroupReportPageRoutingModule
  ],
  declarations: [ItemGroupReportPage]
})
export class ItemGroupReportPageModule {}
