import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AlertPage } from '../pages/alert/alert';
import { ContactPage } from '../pages/contact/contact';
import { HomePage, PopoverPage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

//Import Pages
import { AddContactModule } from '../pages/add-contact/add-contact.module';
import { ChoiceModule } from '../pages/choice/choice.module';
import { CountryPageModule } from '../pages/country-page/country-page.module';
import { InfoModule } from '../pages/info/info.module';
import { LingoModule } from '../pages/lingo/lingo.module';
import { LoginModule } from '../pages/login/login.module';
import { ResetPasswordModule } from '../pages/reset-password/reset-password.module';
import { RiskModule } from '../pages/risk/risk.module';
import { SignupModule } from '../pages/signup/signup.module';
import { TravelinfoModule } from '../pages/travelinfo/travelinfo.module';
import { WordModule } from '../pages/word/word.module';

//Import Providers
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthData } from '../providers/auth-data';

// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireOfflineModule } from 'angularfire2-offline';

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
    AlertPage,
    ContactPage,
    HomePage,
    TabsPage,
    PopoverPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AddContactModule,
    ChoiceModule,
    InfoModule,
    LingoModule,
    RiskModule,
    ResetPasswordModule,
    LoginModule,
    CountryPageModule,
    TravelinfoModule,
    WordModule,
    SignupModule,
    AngularFireDatabaseModule,
    AngularFireOfflineModule,
    AngularFireModule.initializeApp(firebaseConfig,
    myFirebaseAuthConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AlertPage,
    ContactPage,
    HomePage,
    TabsPage,
    PopoverPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthData,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
