import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  alertList: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public af: AngularFire) {
    this.alertList = af.database.list('/alerts');
  }

}
