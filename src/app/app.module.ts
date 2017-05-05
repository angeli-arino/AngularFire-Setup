import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { AddContact } from '../pages/add-contact/add-contact';
import { Login } from '../pages/login/login';
import { ResetPassword } from '../pages/reset-password/reset-password';
import { SignupPage } from '../pages/signup/signup';


//Import Providers
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthData } from '../providers/auth-data';

// Import the AF2 Module
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

// AF2 Settings
export const firebaseConfig = {
  apiKey: "AIzaSyCkCm075rxqYzbFRah00CMt6lk4QbiarOU",
  authDomain: "uciro-health-and-safety.firebaseapp.com",
  databaseURL: "https://uciro-health-and-safety.firebaseio.com",
  storageBucket: "uciro-health-and-safety.appspot.com",
  messagingSenderId: "740177406991"
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
}

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AddContact,
    Login,
    ResetPassword,
    SignupPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig,
    myFirebaseAuthConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AddContact,
    Login,
    ResetPassword,
    SignupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthData,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
