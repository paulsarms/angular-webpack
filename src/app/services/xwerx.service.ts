import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class XwerxService {
  private _dataUrl = './data/sample_data.json';

  constructor (private _http: Http) {  }

  getData(): Observable<any> {
      return this._http.get(this._dataUrl)
      .map((response: Response) => <any>response.json());
    }
}
