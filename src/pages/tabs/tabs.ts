import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import {AllCountriesPage} from "../all-countries/all-countries";
import {FavCountriesPage} from "../fav-countries/fav-countries";

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  allCountriesPage: any = AllCountriesPage;
  favCountriesPage: any = FavCountriesPage

  constructor() {
  }

}
