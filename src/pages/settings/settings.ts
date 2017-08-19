import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import {TabsPage} from "../tabs/tabs";
import {ApplicationStateService} from "../../services/application-state.service";

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  homePage: any = TabsPage;

  constructor(public navCtrl: NavController, private _applicationStateService: ApplicationStateService) {
  }

  get enableFlagThumbnale() : boolean{
    return this._applicationStateService.displayFlagThumbnail;
  }

  set enableFlagThumbnale(newState: boolean){
    this._applicationStateService.displayFlagThumbnail = newState;
  }

  navigateToHome(){
    this.navCtrl.setRoot(this.homePage)
  }
}
