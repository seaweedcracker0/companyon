import { Component } from '@angular/core';
import { ToastController, LoadingController } from '@ionic/angular';

import { ScannerUtil } from '../../util/scanner/scanner';

//Custom Service
import { StorageService } from '../../service/storage';
//No capacitor plugin for this. need to use ionic
import { Sim } from '@ionic-native/sim/ngx';
//All custom capacitor plugin can be accessed from this class
import { Plugins } from '@capacitor/core';

//Implement the interface here
const { Geolocation } = Plugins

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  iframeUrl: string = "";

  constructor(
    public loadingController: LoadingController, 
    public sim: Sim, 
    public toastCtrl: ToastController, 
    private storage: StorageService,
    private scanner: ScannerUtil) { }


  ngOnInit() {
    //For loading screen
    // this.loadingController.create({
    //   message: 'Please wait...'
    // }).then((loadingElem) => {
    //   loadingElem.present();
    //   loadingElem.dismiss();
    // });
  }

  triggerScanner = function () {
    this.scanner.triggerScanner((scannedResponse) => {
      //TO DO Something
    });
  }
}
