import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

//Pages
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-choice',
  templateUrl: 'choice.html',
})
export class Choice {
  travelPlanList: FirebaseListObservable<any>;


  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFire, public alertCtrl: AlertController) {
    this.travelPlanList = af.database.list('/tripPlan');
  }

  //Check if there's an authentication code
  checkAuth(travelPlan, code) {
    if (code == "") {
      this.loadTravelPlan(travelPlan);
    }
    else {
      this.showPrompt(code, travelPlan);
    }
  }

  showPrompt(code, travelPlan) {
    let prompt = this.alertCtrl.create({
      title: 'Authentication',
      message: "Enter the authentication code given by the staff.",
      inputs: [
        {
          name: 'authCode',
          placeholder: 'Authentication Code'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
          }
        },
        {
          text: 'Submit',
          handler: data => {
            if (data.authCode == code) {
              this.loadTravelPlan(travelPlan);
            }
            else {
              this.incorrectCode();
            }
          }
        }
      ]
    });
  prompt.present();
  }

  incorrectCode() {
    let alert = this.alertCtrl.create({
        title: 'Authentication',
        subTitle: 'Your authentication code is incorrect',
        buttons: ['OK']
    });

    alert.present();
  }

  //Loads the Travel Plan
  loadTravelPlan(travelPlan) {
    localStorage.setItem("travelID", travelPlan.id);
    this.navCtrl.setRoot(TabsPage, {travelID: travelPlan.id});
  }

}
