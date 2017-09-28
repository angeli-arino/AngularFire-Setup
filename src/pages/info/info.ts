import { Component } from '@angular/core';
import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import {
  AfoListObservable,
  AfoObjectObservable,
  AngularFireOffline } from 'angularfire2-offline';

@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})

export class Info {

  allinfoList: AfoListObservable<any[]>;;
  infoList;
  id;

  currentInfo;

  constructor(public modalCtrl: ModalController, public navParams: NavParams, public af: AngularFireOffline) {
    this.id = this.navParams.get('travelID');
    this.allinfoList = af.database.list('/travelInfo', {
      query: {
        orderByChild : 'travelID',
        equalTo: this.id
        }
      });
  }

  openModal(info) {
    this.infoList = { title: info.travel, details: info.travelInfo };

    const myModal = this.modalCtrl.create('ModalPage', { data : this.infoList});
    myModal.present();
  }
}
