import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Choice } from './choice';

@NgModule({
  declarations: [
    Choice,
  ],
  imports: [
    IonicPageModule.forChild(Choice),
  ],
  exports: [
    Choice
  ]
})
export class ChoiceModule {}
