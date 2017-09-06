import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';


import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  variable : any;

  tab1Root = HomePage;
  tab1Params = {travelID: 1};
  tab2Root = ContactPage;
  tab2Params = {travelID: 1};
  tab3Root = AboutPage;

  constructor(public navParams: NavParams) {
    this.tab1Params.travelID = this.navParams.get('travelID');
    this.tab2Params.travelID = this.navParams.get('travelID');
    console.log(this.tab2Params.travelID);
  }
}
