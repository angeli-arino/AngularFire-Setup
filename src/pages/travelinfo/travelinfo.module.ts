import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Travelinfo } from './travelinfo';

@NgModule({
  declarations: [
    Travelinfo,
  ],
  imports: [
    IonicPageModule.forChild(Travelinfo),
  ],
  exports: [
    Travelinfo
  ]
})
export class TravelinfoModule {}
