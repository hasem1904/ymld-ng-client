import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Performance} from '../model/performance.model'


@Injectable()
export class PerformanceService {

  private serviceUrl = 'http://localhost:8080/performance/all'

  constructor(private http: HttpClient) {
  }

  getPerformance(): Observable<Performance[]> {
    return this.http.get<Performance[]>(this.serviceUrl);
  }
}
