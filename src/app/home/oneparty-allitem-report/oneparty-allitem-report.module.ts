import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OnepartyAllitemReportPageRoutingModule } from './oneparty-allitem-report-routing.module';

import { OnepartyAllitemReportPage } from './oneparty-allitem-report.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OnepartyAllitemReportPageRoutingModule
  ],
  declarations: [OnepartyAllitemReportPage]
})
export class OnepartyAllitemReportPageModule {}
