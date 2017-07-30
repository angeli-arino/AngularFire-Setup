import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController} from 'ionic-angular';

/**
 * Generated class for the ModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-modal-page',
  templateUrl: 'modal-page.html',
})
export class ModalPage {

  currentInfo;
  constructor(public navParams: NavParams, public viewController: ViewController) {
    this.currentInfo = this.navParams.get('data');
    }

    closeModal() {
      this.viewController.dismiss();
      }

    ionViewDidLoad() {
      const data = this.navParams.get('data');
      console.log(data);
      }


}
