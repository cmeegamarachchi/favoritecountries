import { Component } from '@angular/core';
import { IonicPage} from 'ionic-angular';
import {Country} from "../../services/country.model";
import {CountryService} from "../../services/country.service";

@IonicPage()
@Component({
  selector: 'page-all-countries',
  templateUrl: 'all-countries.html',
})
export class AllCountriesPage {

  constructor(private _countrySvc: CountryService) {
  }

  get countries() : Country[] {
    return this._countrySvc.countries;
  }

}
