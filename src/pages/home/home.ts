import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AuthData } from '../../providers/auth-data';

import { Login } from '../login/login';

import {App} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public authData: AuthData,
  public app: App) {
  }

  logout() {
    this.authData.logoutUser().then( authData =>
    {this.app.getRootNav().setRoot(Login);});
  }
}
