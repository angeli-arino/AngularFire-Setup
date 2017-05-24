import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController
} from 'ionic-angular';

//Form validation
import { FormBuilder, Validators } from '@angular/forms';
import { AuthData } from '../../providers/auth-data';

//Import pages
import { TabsPage } from '../tabs/tabs';
import { SignupPage } from '../signup/signup';
import { Choice } from '../choice/choice';
import { ResetPassword } from '../reset-password/reset-password';

//Email validator.
import { EmailValidator } from '../../validators/email';

/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {

  loginForm: any;
  loading: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public authData: AuthData, public formBuilder: FormBuilder,
  public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
    this.loginForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required,
          EmailValidator.isValid])],
      password: ['', Validators.compose([Validators.minLength(6),
      Validators.required])]
    });
  }

  loginUser(){
    if (!this.loginForm.valid){
      console.log(this.loginForm.value);
    } else {
      this.authData.loginUser(this.loginForm.value.email,
        this.loginForm.value.password).then( authData => {
          this.navCtrl.setRoot(Choice);
    }, error => {
      this.loading.dismiss().then( () => {
        let alert = this.alertCtrl.create({
          message: error.message,
          buttons: [
          {
            text: "Ok",
            role: 'cancel'
          }
          ]
    });
      alert.present();
    });
  });

    this.loading = this.loadingCtrl.create({
      dismissOnPageChange: true,
    });
    this.loading.present();
    }
  }

  goToResetPassword(){
    this.navCtrl.push(ResetPassword);
  }

  createAccount(){
    this.navCtrl.push(SignupPage);
  }
}
