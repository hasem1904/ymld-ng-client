import {Injectable} from '@angular/core';

import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Priceplan} from '../model/priceplan.model'

@Injectable()
export class PriceplanService {

  private serviceUrl = 'http://localhost:8080/priceplan/all'

  constructor(private http: HttpClient) {
  }

  getPriceplan(): Observable<Priceplan[]> {
    return this.http.get<Priceplan[]>(this.serviceUrl);
  }
}
