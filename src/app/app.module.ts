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
import {HttpModule} from "@angular/http";
import {SettingsPageModule} from "../pages/settings/settings.module";
import {ApplicationStateService} from "../services/application-state.service";

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpModule,

    AllCountriesPageModule,
    FavCountriesPageModule,
    SettingsPageModule,
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
    ApplicationStateService,
    CountryService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
