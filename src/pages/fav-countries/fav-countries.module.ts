import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FavCountriesPage } from './fav-countries';

@NgModule({
  declarations: [
    FavCountriesPage,
  ],
  imports: [
    IonicPageModule.forChild(FavCountriesPage),
  ],
})
export class FavCountriesPageModule {}
