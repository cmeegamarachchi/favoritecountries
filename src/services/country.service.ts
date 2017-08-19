import {Injectable} from "@angular/core";

import { Country } from './country.model'

@Injectable()
export class CountryService {

  get countries(): Country[] {

    let sriLanka = new Country();
    sriLanka.name = "Sri Lanka";
    sriLanka.flag = "https://restcountries.eu/data/lka.svg";
    sriLanka.region = "South Asia";

    let australia = new Country();
    australia.name = "Australia";
    australia.flag = "https://restcountries.eu/data/aus.svg";
    australia.region = "Oceania";


    return [ sriLanka,  australia ];
  }
}
