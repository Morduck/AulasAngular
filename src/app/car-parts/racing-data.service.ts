import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import { CarPart } from './car-part';
@Injectable()
export class RacingDataService {

  constructor(private http: Http) { }

  getCarParts(){
    return this.http.get('assets/car-part.json').map(res => <CarPart[]>res.json().data);
  }
}
