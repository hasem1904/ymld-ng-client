import {Component, OnInit, ViewChild} from '@angular/core';

import {PriceplanService} from "../service/priceplan.service";
import {DataSource} from "@angular/cdk/collections";
import {Observable} from "rxjs/Observable";
import {Priceplan} from "../model/priceplan.model";
import {MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {Transactionlog} from "../model/transactionlog.model";

@Component({
  selector: 'app-seatpricing',
  templateUrl: './seatpricing.component.html',
  styleUrls: ['./seatpricing.component.css']
})
export class SeatpricingComponent implements OnInit {
  //Attributes set i html template
  displayedColumns = ['id', 'priceplanCost'];
  //dataSource = new PriceplanDataSource(this.priceplanService);
  dataSource = new MatTableDataSource<Priceplan>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private priceplanService: PriceplanService) {
  }

  ngOnInit() {
    this.priceplanService.getPriceplan().subscribe(
      data => {
        this.dataSource.data = data;
      },
      error => console.log('GetControls Method: ' + <any>error, 'alert alert-danger')
    );
  }

  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}

export class PriceplanDataSource extends DataSource<any> {
//export class PerformanceDataSource extends MatTableDataSource<any> {

  constructor(private priceplanService: PriceplanService) {
    super();
  }

  connect(): Observable<Priceplan[]> {
    return this.priceplanService.getPriceplan();
  }

  disconnect() {
  }
}
