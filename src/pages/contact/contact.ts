import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


import { AddContact } from '../add-contact/add-contact';

declare var window;

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  id;
  finalContacts = [];
  contactList: FirebaseListObservable<any>;
  keyContacts: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public af: AngularFire,
  public navParams: NavParams) {
    this.id = navParams.get('travelID');
    this.contactList = af.database.list('/contacts');
    this.keyContacts = af.database.list('/keyContacts', {
      query: {
        orderByChild : 'travelID',
        equalTo: this.id
        }
      });
  }

  addContact(){
    this.navCtrl.push(AddContact);
  }

  callNumber(passedNo) {
    window.location = "tel:" + passedNo
  }
}
