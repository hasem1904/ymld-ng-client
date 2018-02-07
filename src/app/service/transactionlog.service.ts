import {Injectable} from '@angular/core';

import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Transactionlog} from '../model/transactionlog.model'

@Injectable()
export class TransactionlogService {

  private serviceUrl = 'http://localhost:8080/transactionlog/all'

  constructor(private http: HttpClient) {
  }

  getTransactionlog(): Observable<Transactionlog[]> {
    return this.http.get<Transactionlog[]>(this.serviceUrl);
  }
}
