import { Component } from '@angular/core';
import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})

export class Info {

  allinfoList: FirebaseListObservable<any>;
  infoList;
  id;

  currentInfo;
  myInfo = [
          {
            name: 'Safe Travel',
            info: 'Make sure that you have registered with SafeTravel,' +
            'which is the official registration facility for New Zealanders' +
            'travelling or living overseas: https://register.safetravel.govt.nz/login.',
          },
          {
            name: 'Documentation',
            info: 'Make sure that you have taken photocopies of all your official documentation (including your passport and visa) and leave a copy at home and take one with you.',
          },
          {
            name: 'Photo identification',
            info: 'It is a requirement under Thai law to carry photo identification at all times.  A  New Zealand driver’s licence, a photocopy of the biodata page from a passport, or your Mahidol University student ID card would be adequate identification in the first instance. It is recommended that you carry your Mahidol University ID card at all times.  This will have Chan’s contact details on it in both Thai and English. ',
          },

          {
            name: 'Medical supplies',
            info: 'Check that any medical supplies you are taking with you are legal to carry in Thailand.',
          },

          {
            name: 'Liquids, aerosols, pastes and gels',
            info: 'Be aware of the restrictions for carriage of liquids, aerosols and gels on aircraft: <br> •	All liquids, aerosols, gels or pastes such as water, drinks, creams, perfumes, sprays, gels, toothpaste, lip gloss and mascaras must be in individual containers not greater than 100ml in volume •	All containers must be carried in a re-sealable transparent plastic bag no larger than one litre (approximately 20cm x 20cm or 8 inches x 8 inches) •	Only one bag is permitted per passenger •The plastic bag must be sealed and presented separately from all other carry-on baggage at the screening point •	Liquids in containers of more than 100mls can be packed in your checked in baggage.',
          },

          {
            name: 'Vaccinations',
            info: 'Carry your vaccination booklet with you at all times.',
          },

          {
            name: 'Personal travel and excursions',
            info: 'For those travelling before the programme, it is your responsibility to get insurance to cover this period. Remember that just because you have travel insurance, you may not be covered for all the activities that you get up to – check your policy exclusions. Check https://www.safetravel.govt.nz/thailand in planning any personal travel as there are certain areas in Thailand that are deemed high risk and that should be avoided.',
          },

          {
            name: 'Baggage',
            info: 'Take bags that can be locked and make sure that all sections of your checked baggage are locked.',
          },

          {
            name: 'Cellphones',
            info: 'Check with your cellphone provider as to whether there is anything that you need to do to set-up international roaming and make sure that this is set-up before you leave. Chan will take you to get a Thai sim card once you are there, but you may need to use your phone before then. For example, if your flights are delayed or to notify family that you have arrived. You should also check your provider’s roaming charges and be careful as your bill can rise rapidly. It is a good idea to turn your data off. Provide your Thai cellphone number to Chan, Stephen and Will as soon as possible. Carry a charged phone with you at all times and load it with all vital contact details. Remember to take a power plug adapter for charging your phone.',
          },

          {
            name: 'Emergency',
            info: 'In the event of an emergency, remove yourself from danger as soon as safely possible. Seek or administer first aid if required. Notify emergency services and/or local authorities if relevant. Notify an activity leader as soon as possible. Notify the NZ Embassy if relevant. Notify Jacqui Lyttle. Follow the instructions of local authorities and the NZ Embassy. ',
          },

          {
            name: 'Insurance',
            info: 'You should keep any receipts so that you can be reimbursed.',
          },

        ];

  constructor(public modalCtrl: ModalController, public navParams: NavParams, public af: AngularFire) {
    this.allinfoList = af.database.list('/travelInfo');
    this.id = this.navParams.get('travelID');
    this.allinfoList = af.database.list('/travelInfo', {
      query: {
        orderByChild : 'travelID',
        equalTo: this.id
        }
      });
  }

  openModal(info) {
    this.infoList = { title: info.travel, details: info.travelInfo };

    const myModal = this.modalCtrl.create('ModalPage', { data : this.infoList});
    myModal.present();
  }
}
