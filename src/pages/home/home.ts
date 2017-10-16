import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  options: BarcodeScannerOptions;
  data: any;
  qrData = null;
  scannedCode = null;
  createdCode = '';

  constructor(public navCtrl: NavController, private qrScanner: QRScanner, private barcodeScanner: BarcodeScanner) {

  }

  async scanQrcode(){
    const results = await this.barcodeScanner.scan();
    console.log(results);
    this.scannedCode = results.text;
  }
  createCode() {
this.createdCode = this.qrData;
  }
  scanCode() {
    this.barcodeScanner.scan(barcodeData => {
      console.log(barcodeData);
      this.scannedCode = barcodeData.text;

    })
  }
}
