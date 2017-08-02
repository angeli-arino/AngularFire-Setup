import { Component } from '@angular/core';
import { ModalController, Platform, ViewController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

/**
 * Generated class for the Risk page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-risk',
  templateUrl: 'risk.html',
})
export class Risk {
  currentRisk;
  allriskList: FirebaseListObservable<any>;
  myRisk = [
    {
      name: 'NZ Safe Travel Advisory',
      info: 'There is an extreme risk to your security in the southernmost provinces of Narathiwat, Yala, Pattani and Songkhla due to ongoing politically-motivated and criminal violence, which occurs on an almost daily basis. We advise against all travel to these provinces. The Thai Government has warned tourists not to travel to these areas. There is some risk to your security elsewhere in Thailand due to the potential for civil unrest and threat of terrorism and we advise caution'
    },
    {
      name: 'Safety (terrorism)',
      info: 'There is an ongoing threat of terrorism in Thailand. There have been a number of explosive device incidents in Bangkok and other cities, including Phuket and Koh Samui. In August 2016, there were multiple explosions in Thailand. These occurred in a number of tourist areas, including Hua Hin, Phuket, Phang Nga, Trang, and Surat Thani and resulted in casualties. On 17 August 2015, an explosion near the Erawan Shrine in central Bangkok killed at least 20 people and injured many more. Further incidents are possible. New Zealanders are advised to exercise a high degree of personal security awareness in Thailand. Particular care should be taken in public and commercial areas, including landmark places known to be frequented by expatriates or foreign tourists, public transport facilities, hotels, bars, tourist resorts, shopping areas and places of worship.'
      },
  ];

  constructor(public modalCtrl: ModalController, public navParams: NavParams, public af: AngularFire) {
    this.allriskList = af.database.list('/riskInfo');

  }

  openModal(risk) {
    this.currentRisk = { title: risk.risk, details: risk.riskInfo };


    const myModal = this.modalCtrl.create('ModalPage', { data : this.currentRisk});
    myModal.present();
  }

}
