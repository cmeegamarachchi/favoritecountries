import {Injectable} from "@angular/core";

@Injectable()
export class ApplicationStateService {
  private _displayFlagThumbnail: boolean = true;

  get displayFlagThumbnail() : boolean {
    return this._displayFlagThumbnail;
  }

  set displayFlagThumbnail(_newState: boolean){
    this._displayFlagThumbnail = _newState;
  }
}
