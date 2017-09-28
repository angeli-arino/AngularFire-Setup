import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import {
  AfoListObservable,
  AfoObjectObservable,
  AngularFireOffline } from 'angularfire2-offline';

@Component({
  selector: 'page-alert',
  templateUrl: 'alert.html'
})
export class AlertPage {
  alertList: AfoListObservable<any[]>;;

  constructor(public navCtrl: NavController, public af: AngularFireOffline) {
    this.alertList = af.database.list('/alerts');
  }
}
