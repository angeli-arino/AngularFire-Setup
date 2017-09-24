import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import firebase from 'firebase';

/**
 * Generated class for the Word page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-word',
  templateUrl: 'word.html',
})
export class Word {
  language;
  wordList: FirebaseListObservable<any>;
  audioElement;
  buttonColor;

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFire) {
    this.language = this.navParams.get('language');
    console.log(this.language);
    this.wordList = af.database.list('/localLingo', {
      query: {
        orderByChild : 'language',
        equalTo: this.language
        }
      });
  }

  loadAudio(wordID){
    var store = firebase.storage();
    // Create a reference to the file we want to download
    var fileRef = store.ref('lingoAudio/'+wordID);
    // Get the download URL
    fileRef.getDownloadURL().then(function(url) {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', url);
    // Play Audio
    audioElement.play();
    audioElement.addEventListener("ended", function() {
    })

    }).catch(function(error) {
      switch (error['code']) {
        case 'storage/object_not_found':
          // File doesn't exist
          break;
        case 'storage/unauthorized':
          // User doesn't have permission to access the object
          break;
        case 'storage/canceled':
          // User canceled the upload
          break;
        case 'storage/unknown':
          // Unknown error occurred, inspect the server response
          break;
      }
    });
  }
}
