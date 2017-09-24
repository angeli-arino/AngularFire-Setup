import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { NavController } from 'ionic-angular';


import { AlertPage } from '../alert/alert';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { Choice } from '../choice/choice';

import {App} from 'ionic-angular';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  variable : any;

  tab1Root = HomePage;
  tab1Params = {travelID: ""};
  tab2Root = ContactPage;
  tab2Params = {travelID: ""};
  tab3Root = AlertPage;

  constructor(public navParams: NavParams, public navCtrl: NavController, public app: App) {
    this.tab1Params.travelID = this.navParams.get('travelID');
    this.tab2Params.travelID = this.navParams.get('travelID');


    if (localStorage.getItem("travelID")==null) {
      this.app.getRootNav().setRoot(Choice);
    }
    else {
      this.tab1Params.travelID = localStorage.getItem("travelID");
      this.tab2Params.travelID = localStorage.getItem("travelID");
    }
  }
}
