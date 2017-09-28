import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import {
  AfoListObservable,
  AfoObjectObservable,
  AngularFireOffline } from 'angularfire2-offline';

import { Word } from '../word/word';

@IonicPage()
@Component({
  selector: 'page-lingo',
  templateUrl: 'lingo.html',
})
export class Lingo {

  tripLanguageList: AfoListObservable<any[]>;
  lingo;
  id;

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFireOffline ,
  public modalCtrl: ModalController) {
    this.id = navParams.get('travelID');
    this.tripLanguageList = af.database.list('/tripLanguage', {
      query: {
        orderByChild : 'travelID',
        equalTo: this.id
        }
      });
    console.log(this.id);
  }

  openWord(language) {
    this.navCtrl.push(Word, {language: language});

  }

}
