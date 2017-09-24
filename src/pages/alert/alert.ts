import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'page-alert',
  templateUrl: 'alert.html'
})
export class AlertPage {
  alertList: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public af: AngularFire) {
    this.alertList = af.database.list('/alerts');
  }

}
