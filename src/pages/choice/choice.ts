import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

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
  travelPlanList: FirebaseListObservable<any>;


  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFire) {
    this.travelPlanList = af.database.list('/tripPlan');
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad Choice');
  }

  loadTravelPlan(travelPlan) {
    localStorage.setItem("travelID", travelPlan.id);
    console.log(travelPlan.id);
    this.navCtrl.setRoot(TabsPage, {travelID: travelPlan.id});
  }

}
