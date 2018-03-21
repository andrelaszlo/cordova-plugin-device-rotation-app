import { Component, ChangeDetectorRef } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var CordovaPluginDeviceRotation: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public orientation: any;

  constructor(public navCtrl: NavController, ref: ChangeDetectorRef) {
    this.orientation = "Loading...";
    CordovaPluginDeviceRotation.onOrientationChange(orientation => {
      console.log("New orientation", orientation);
      this.orientation = orientation;
      ref.detectChanges();
    });
  }

  ionViewDidLoad() {
    console.log('view loaded');
  }

}
