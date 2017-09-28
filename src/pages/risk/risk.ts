import { Component } from '@angular/core';
import { ModalController, Platform, ViewController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import {
  AfoListObservable,
  AfoObjectObservable,
  AngularFireOffline } from 'angularfire2-offline';

/**
 * Generated class for the Risk page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-risk',
  templateUrl: 'risk.html',
})
export class Risk {
  currentRisk;
  allriskList: AfoListObservable<any[]>;
  id;

  constructor(public modalCtrl: ModalController, public navParams: NavParams,
  public af: AngularFireOffline) {
    this.id = navParams.get('travelID');
    this.allriskList = af.database.list('/riskInfo', {
      query: {
        orderByChild : 'travelID',
        equalTo: this.id
        }
      });
  }

  openModal(risk) {
    this.currentRisk = { title: risk.risk, details: risk.riskInfo };
    const myModal = this.modalCtrl.create('ModalPage', { data : this.currentRisk});
    myModal.present();
  }

}
