import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AllCountriesPage } from './all-countries';

@NgModule({
  declarations: [
    AllCountriesPage,
  ],
  imports: [
    IonicPageModule.forChild(AllCountriesPage),
  ],
})
export class AllCountriesPageModule {}
