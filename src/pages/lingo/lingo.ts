import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

/**
 * Generated class for the Lingo page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-lingo',
  templateUrl: 'lingo.html',
})
export class Lingo {

  localLingo: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFire) {
    this.localLingo = af.database.list('/localLingo');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Lingo');
  }

}
