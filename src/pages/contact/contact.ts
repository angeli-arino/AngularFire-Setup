import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


import { AddContact } from '../add-contact/add-contact';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  contactList: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public af: AngularFire) {
    this.contactList = af.database.list('/contacts');
  }

  addContact(){
    this.navCtrl.push(AddContact);
  }

  callPhone(passedNo) {
    window.location = passedNo
  }
}
