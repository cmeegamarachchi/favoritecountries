import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
import {Country} from "./country.model";
import {Http} from "@angular/http";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class CountryService{

  private _countries: Array<Country>;

  constructor(private http: Http){
    this._countries = new Array<Country>();
  }

  private getCountries() : Observable<Country[]>  {

    function mapToCountries(listOfCountries: any) : Country[] {

      let result: Array<Country> = new Array<Country>();

      for(let country of listOfCountries){
        let newCountry = new Country();
        newCountry.name = country.name;
        newCountry.flag = country.flag;
        newCountry.region = country.region;
        result.push(newCountry)
      }

      return result;
    }

    return this.http.get("https://restcountries.eu/rest/v2/all?fields=name;capital;alpha2Code;capital;region;subregion;flag")
      .map((res:any) => res.json())
      .map((listOfCountries: any) => mapToCountries(listOfCountries))
      .catch((error:any) => Observable.throw(error.json() || 'Server error'));
  }

  get countries() : Country[]{

    if (this._countries.length === 0){
      this.getCountries().subscribe((countries: Country[])=> {
        Object.assign(this._countries, countries);
      });
    }

    return this._countries;
  }

  get favoriteCountries(): Country[] {
    return this.countries.filter((c:Country)=> c.isFavorite === true);
  }

  public addToFavorite(country: Country){
    let match = this.countries.find((c:Country)=>c.name === country.name);

    if (match !== null){
      match.isFavorite = true;
    }
  }

  public  removeFromFavorite(country: Country){
    let match = this.countries.find((c:Country)=>c.name === country.name);

    if (match !== null){
      match.isFavorite = false;
    }
  }
}
