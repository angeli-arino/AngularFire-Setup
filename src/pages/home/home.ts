import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PopoverController, ViewController } from 'ionic-angular';

import { AuthData } from '../../providers/auth-data';

import { Login } from '../login/login';
import { Info } from '../info/info';
import { Risk } from '../risk/risk';
import { CountryPage } from '../country-page/country-page';
import { Lingo } from '../lingo/lingo';

import {App} from 'ionic-angular';

@Component({
  template: `
    <ion-list>
      <ion-list-header>Ionic</ion-list-header>
      <button ion-item (click)="close()">Learn Ionic</button>
      <button ion-item (click)="close()">Documentation</button>
      <button ion-item (click)="close()">Showcase</button>
      <button ion-item (click)="close()">GitHub Repo</button>
    </ion-list>
  `
})
export class PopoverPage {
  constructor(public viewCtrl: ViewController) {}

  close() {
    this.viewCtrl.dismiss();
  }
}


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public authData: AuthData,
  public app: App, public popoverCtrl: PopoverController) {
  }

  logout() {
    this.authData.logoutUser().then( authData =>
    {this.app.getRootNav().setRoot(Login);});
  }

  showInfo() {
    this.navCtrl.push(Info);
  }

  showRisks() {
    this.navCtrl.push(Risk);
  }

  showCountry() {
    this.navCtrl.push(CountryPage)
  }

  showLingo() {
    this.navCtrl.push(Lingo)
  }

  presentPopover(myEvent) {
  let popover = this.popoverCtrl.create(PopoverPage);
  popover.present({
    ev: myEvent
    });
  }

}
