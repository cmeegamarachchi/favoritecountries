import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import {TabsPageModule} from "../pages/tabs/tabs.module";
import {TabsPage} from "../pages/tabs/tabs";
import {AllCountriesPageModule} from "../pages/all-countries/all-countries.module";
import {FavCountriesPageModule} from "../pages/fav-countries/fav-countries.module";
import {CountryService} from "../services/country.service";

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,

    AllCountriesPageModule,
    FavCountriesPageModule,
    TabsPageModule,

    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CountryService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
