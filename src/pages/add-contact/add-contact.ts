import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {AngularFire, FirebaseListObservable} from 'angularfire2';

/**
 * Generated class for the AddContact page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-add-contact',
  templateUrl: 'add-contact.html',
})
export class AddContact {
  contactList: FirebaseListObservable<any>;
  constructor(public navCtrl: NavController, public af: AngularFire) {
  this.contactList = af.database.list('/contacts');
  }

  addContact(name, address, phone, city) {
    this.contactList.push({
      name: name,
      address: address,
      phone: phone,
      city: city
    }).then( newContact => {
      this.navCtrl.pop();
    }, error => {
      console.log(error);
    });
  }

}
