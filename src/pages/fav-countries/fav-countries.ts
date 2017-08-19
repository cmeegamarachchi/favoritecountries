import { Component } from '@angular/core';
import { IonicPage} from 'ionic-angular';
import {CountryService} from "../../services/country.service";
import {Country} from "../../services/country.model";


@IonicPage()
@Component({
  selector: 'page-fav-countries',
  templateUrl: 'fav-countries.html',
})
export class FavCountriesPage {

  constructor(private _countryService: CountryService) {
  }

  get favoriteCountries(): Country[] {
    return this._countryService.favoriteCountries;
  }

}
