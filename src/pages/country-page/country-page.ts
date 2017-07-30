import { Component } from '@angular/core';
import { ModalController, IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the CountryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-country-page',
  templateUrl: 'country-page.html',
})
export class CountryPage {
  currentCountry;
  myCountry = [
    {
      name: 'Accommodation',
      info: 'Female: Condo D, Mahidol University, 999 Phuttamonthon Salaya Sai 4 Nakhon Pathom 73170. Male: Condo A, Mahidol University, 999 Phuttamonthon Salaya Sai 4 Nakhon Pathom 73170.'
    }
  ];

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams) {
  }

  openModal(numGiven) {
    this.currentCountry = this.myCountry[Number(numGiven*1)];

    const myModal = this.modalCtrl.create('ModalPage', { data : this.currentCountry});
    myModal.present();
  }

}
