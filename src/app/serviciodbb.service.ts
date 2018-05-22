import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class ServiciodbbService {
  constructor(
    private _http: HttpClient
  ) { }

  getProducts() {
    const headers = new HttpHeaders({'Content-Type': 'application/json' });
    return this._http.post('/api/getProducts', { headers })
      .catch( (error: any) => Observable.throw(error || 'server error'));
  }

  getOneP(idd: string, cN: string) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    // const params = new HttpParams().set('idd', idd).set('collectionN', cN);
    return this._http.post('/api/getOne', { idd: idd, collectionN: cN }, {headers});
  }

}
