import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import {TabsPage} from "../tabs/tabs";

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  homePage: any = TabsPage;

  constructor(public navCtrl: NavController) {
  }

  navigateToHome(){
    this.navCtrl.setRoot(this.homePage)
  }

}
