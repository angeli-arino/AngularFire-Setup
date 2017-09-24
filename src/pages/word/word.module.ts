import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Word } from './word';

@NgModule({
  declarations: [
    Word,
  ],
  imports: [
    IonicPageModule.forChild(Word),
  ],
  exports: [
    Word
  ]
})
export class WordModule {}
