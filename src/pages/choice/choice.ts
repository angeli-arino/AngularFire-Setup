import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//Pages
import { TabsPage } from '../tabs/tabs';


/**
 * Generated class for the Choice page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-choice',
  templateUrl: 'choice.html',
})
export class Choice {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Choice');
  }

  chooseThai() {

  this.navCtrl.setRoot(TabsPage);


  }

  chooseChina() {
  this.navCtrl.setRoot(TabsPage);

  }

}
