import { Component } from '@angular/core';
import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})

export class Info {
  currentInfo;
  myInfo = [
          {
            name: 'Gollum',
            quote: 'Sneaky little hobbitses!',
          },
          {
            name: 'Frodo',
            quote: 'Go back, Sam! I\'m going to Mordor alone!',
          },
          {
            name: 'Samwise Gamgee',
            quote: 'What we need is a few good taters.',
          }
        ];

  constructor(public modalCtrl: ModalController, public navParams: NavParams) {

  }

  openModal(numGiven) {
    this.currentInfo = this.myInfo[Number(numGiven*1)];
    console.log(this.currentInfo);

    const myModal = this.modalCtrl.create('ModalPage', { data : this.currentInfo});
    myModal.present();
  }
}
