import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

/**
 * Generated class for the Travelinfo page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-travelinfo',
  templateUrl: 'travelinfo.html',
})
export class Travelinfo {

  tripList: FirebaseListObservable<any>;
  id;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public af: AngularFire) {
    this.id = localStorage.getItem("travelID");
    this.tripList = af.database.list('/tripPlan', {
      query: {
        orderByChild : 'id',
        equalTo: this.id,
        limitToFirst: 1
        }
      });
      console.log(this.tripList);
      console.log(localStorage.getItem("travelID"));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Travelinfo');
  }

}
