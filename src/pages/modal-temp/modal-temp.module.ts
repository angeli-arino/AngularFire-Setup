import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalTemp } from './modal-temp';

@NgModule({
  declarations: [
    ModalTemp,
  ],
  imports: [
    IonicPageModule.forChild(ModalTemp),
  ],
  exports: [
    ModalTemp
  ]
})
export class ModalTempModule {}
