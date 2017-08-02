import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


import { AddContact } from '../add-contact/add-contact';

declare var window;

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  contactList: FirebaseListObservable<any>;
  keyContacts: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public af: AngularFire) {
    this.contactList = af.database.list('/contacts');
    this.keyContacts = af.database.list('/keyContacts');
  }

  addContact(){
    this.navCtrl.push(AddContact);
  }

  callNumber(passedNo) {
    window.location = "tel:" + passedNo
  }
}
