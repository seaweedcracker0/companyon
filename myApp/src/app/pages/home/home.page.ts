import { Component } from '@angular/core';
import { ToastController, LoadingController } from '@ionic/angular';
import { ModalController, NavController } from '@ionic/angular';
import { ScannerUtil } from '../../util/scanner/scanner';

//Custom Service
import { StorageService } from '../../service/storage';
//No capacitor plugin for this. need to use ionic
import { Sim } from '@ionic-native/sim/ngx';
//All custom capacitor plugin can be accessed from this class
import { Plugins } from '@capacitor/core';

import { AuthService } from '../../service/auth.service';

//Implement the interface here
const { Geolocation } = Plugins

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  iframeUrl: string = "";
  userName: string = "";

  constructor(
    public loadingController: LoadingController, 
    public sim: Sim, 
    public toastCtrl: ToastController, 
    private storage: StorageService,
    private scanner: ScannerUtil,
    private navCtrl: NavController,
    private authService: AuthService) { }


  ngOnInit() {    
    //console.log(this.authService.getUser());
    //For loading screen
    // this.loadingController.create({
    //   message: 'Please wait...'
    // }).then((loadingElem) => {
    //   loadingElem.present();
    //   loadingElem.dismiss();
    // });
  }

  ionViewWillEnter(){
    this.getUser();
  }

  triggerScanner = function () {
    this.scanner.triggerScanner((scannedResponse) => {
      //TO DO Something
    });
  }

  logout(){
    if (this.authService.logout()){
      this.navCtrl.navigateRoot('/login');
    }
  }

  getToken(){
    this.authService.getToken();
  }

  getUser(){      
    this.authService.getUser().then(val => {      
      this.userName = val.username;
    });   
  }
}
