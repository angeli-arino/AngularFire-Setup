import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignupPage } from './signup';

@NgModule({
  declarations: [
    Signup,
  ],
  imports: [
    IonicPageModule.forChild(Signup),
  ],
  exports: [
    SignupPage
  ]
})
export class SignupModule {}
