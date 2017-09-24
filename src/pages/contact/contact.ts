import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, Platform } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import {
  AngularFireOfflineDatabase,
  AfoListObservable,
  AfoObjectObservable } from 'angularfire2-offline/database';

import { AddContact } from '../add-contact/add-contact';

declare var window;

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  id;
  contactList: AfoListObservable<any[]>;
  keyContacts: AfoListObservable<any[]>;

  constructor(public navCtrl: NavController, public af: AngularFireOfflineDatabase,
  public navParams: NavParams, public alertController: AlertController, public platform: Platform) {
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

  map(passedLoc) {
   if (passedLoc != "") {
    if (this.platform.is('android')) {
      window.location.href = "http://maps.google.com/?q="+ passedLoc;
    }
    else if (this.platform.is('ios')) {
      window.location.href = "http://maps.google.com/?q="+ passedLoc;
    }

     }
   else {
     let alert = this.alertController.create();
     alert.setTitle("Map Failed");
     alert.setSubTitle("There is no address!");
     alert.addButton("Dismiss");

     alert.present();
   }
  }

  email(passedEmail) {
    if(passedEmail != "") {
      window.location.assign('mailto:'+passedEmail);
    }
    else {
      let alert = this.alertController.create();
      alert.setTitle("Email Failed");
      alert.setSubTitle("There is no email address!");
      alert.addButton("Dismiss");

      alert.present();
    }
  }

  callNumber(passedNo) {
    if (passedNo !="") {
    window.location = "tel:" + passedNo
    }
    else {
      let alert = this.alertController.create({
        title: 'Phone Call Failed',
        subTitle: 'There is no phone number!',
        buttons: ['Dismiss']
      });
      alert.present();
    }
  }

}
