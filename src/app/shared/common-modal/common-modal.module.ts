import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommonModalPageRoutingModule } from './common-modal-routing.module';

import { CommonModalPage } from './common-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommonModalPageRoutingModule
  ],
  declarations: [CommonModalPage]
})
export class CommonModalPageModule {}
