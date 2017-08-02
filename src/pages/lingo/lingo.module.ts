import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Lingo } from './lingo';

@NgModule({
  declarations: [
    Lingo,
  ],
  imports: [
    IonicPageModule.forChild(Lingo),
  ],
  exports: [
    Lingo
  ]
})
export class LingoModule {}
