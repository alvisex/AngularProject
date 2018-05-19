import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {Product} from './product';
import {PRODUCTS} from './mock-products';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable()
export class MongodbService {


  constructor(private _http:HttpClient) { }
  
  result:any;
  getProducts(){
  let headers= new HttpHeaders({'Content-Type':'application/json'});
  try{
  return this._http.post('/api/getProducts',
  {headers:headers});}
  catch{((error:any)=> Observable.throw(error.json().error || 'server error'));}
  
  }

}
