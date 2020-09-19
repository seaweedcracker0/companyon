import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
import { HTTP } from '@ionic-native/http/ngx';
import { ToastController } from '@ionic/angular';
import { Injectable } from '@angular/core';

//Custom Service
import { StorageService } from '../../service/storage';

@Injectable({
    providedIn: 'root'
})
export class ScannerUtil {

    constructor(private barcodeCtrl: BarcodeScanner) { }

    static triggerScanner = function (callback) {
        //Need to instantiate since constructor never triggered for utility classes
        this.barcodeCtrl = new BarcodeScanner();

        //The options
        const options: BarcodeScannerOptions = {
            preferFrontCamera: false,
            showFlipCameraButton: false,
            showTorchButton: false,
            torchOn: false,
            prompt: 'Place a QR Code inside the scan area',
            resultDisplayDuration: 0,
            formats: 'QR_CODE',
            orientation: 'portrait',
        };

        this.barcodeCtrl.scan(options).then(barcodeData => {
            //Trigger the callback function
            callback(barcodeData);

        }).catch(err => {
            console.log('Error', err);
        });
    }

    async triggerToast(message) {
        let toastCtrl = new ToastController();
        const toast = await toastCtrl.create({
            message: message,
            duration: 2000
        });

        toast.present();
    }
}
