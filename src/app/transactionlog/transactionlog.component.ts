import {Component, OnInit, ViewChild} from '@angular/core';
import {DataSource} from "@angular/cdk/collections";
import {Observable} from "rxjs/Observable";
import {Transactionlog} from "../model/transactionlog.model";
import {TransactionlogService} from "../service/transactionlog.service";
import {MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {Performance} from "../model/performance.model";

@Component({
  selector: 'app-transactionlog',
  templateUrl: './transactionlog.component.html',
  styleUrls: ['./transactionlog.component.css']
})
export class TransactionlogComponent implements OnInit {

  //Attributes set i html template
  displayedColumns = ['id', 'txType', 'txDate', 'performanceNo', 'seatNo'];
  //dataSource = new TransactionlogDataSource(this.transactionlogService);
  dataSource = new MatTableDataSource<Transactionlog>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private transactionlogService: TransactionlogService) {
  }

  ngOnInit() {
    this.transactionlogService.getTransactionlog().subscribe(
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

export class TransactionlogDataSource extends DataSource<any> {
//export class PerformanceDataSource extends MatTableDataSource<any> {

  constructor(private transactionlogService: TransactionlogService) {
    super();
  }

  connect(): Observable<Transactionlog[]> {
    return this.transactionlogService.getTransactionlog();
  }

  disconnect() {
  }
}
