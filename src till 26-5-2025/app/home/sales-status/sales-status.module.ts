import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalesStatusPageRoutingModule } from './sales-status-routing.module';

import { SalesStatusPage } from './sales-status.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalesStatusPageRoutingModule
  ],
  declarations: [SalesStatusPage]
})
export class SalesStatusPageModule {}
