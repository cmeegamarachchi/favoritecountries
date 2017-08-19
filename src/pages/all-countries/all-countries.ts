import { Component } from '@angular/core';
import {AlertController, IonicPage} from 'ionic-angular';
import {Country} from "../../services/country.model";
import {CountryService} from "../../services/country.service";

@IonicPage()
@Component({
  selector: 'page-all-countries',
  templateUrl: 'all-countries.html',
})
export class AllCountriesPage {

  constructor(private _alertCtrl: AlertController,  private _countrySvc: CountryService) {
  }

  get countries() : Country[] {
    return this._countrySvc.countries;
  }

  onCountryClick(country: Country){

    let title, subTitle = "";

    if (country.isFavorite){
      title = "Remove from favorites";
      subTitle = "Remove " + country.name + " from favorites";
    }else{
      title = "Add to favorites";
      subTitle = "Add " + country.name + " to favorites";
    }

    let prompt = this._alertCtrl.create({
      title: title,
      subTitle: subTitle,
      buttons: [{
        text: "Ok",
        handler: data => {
          if (country.isFavorite){
            this._countrySvc.removeFromFavorite(country);
          }else{
            this._countrySvc.addToFavorite(country);
          }
        }
      }, {
        text: "Cancel",
        role: "cancel"
      }]
    });

    prompt.present();
  }
}
