import {Component, OnInit, ViewChild} from '@angular/core';
import {PerformanceService} from "../service/performance.service";
import {DataSource} from "@angular/cdk/collections";
import {Observable} from "rxjs/Observable";
import {Performance} from "../model/performance.model";
import {MatPaginator, MatSort, MatTableDataSource} from "@angular/material";

@Component({
  selector: 'app-performances',
  templateUrl: './performances.component.html',
  styleUrls: ['./performances.component.css']
})
export class PerformancesComponent implements OnInit {
  //Attributes set i html template
  displayedColumns = ['productionNo', 'performanceTime', 'performanceDate', 'performanceSeats'];
  dataSource = new MatTableDataSource<Performance>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private performanceService: PerformanceService) {
  }

  ngOnInit() {
    this.performanceService.getPerformance().subscribe(
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

export class PerformanceDataSource extends DataSource<any> {

  constructor(private performanceService: PerformanceService) {
    super();
  }

  connect(): Observable<Performance[]> {
    return this.performanceService.getPerformance();
  }

  disconnect() {
  }
}
