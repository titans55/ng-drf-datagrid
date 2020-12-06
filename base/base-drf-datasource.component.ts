import { HttpClient } from '@angular/common/http';
import { Input, OnDestroy, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Subscription } from 'rxjs';
import { DataSourceConfigs, WoDatagridService, WoDataSource } from '../service/wo-datagrid.service';

export class BaseDrfDatasourceComponent implements OnInit, OnDestroy {
  @Input() dataSourceConfigs: DataSourceConfigs;

  public service: WoDatagridService;
  protected dataSourceSubscription: Subscription;
  public dataSource: WoDataSource;

  constructor(private httpClient: HttpClient) {
    this.service = new WoDatagridService(httpClient);
  }

  ngOnInit() {
    this.service.fetchDataSource(this.dataSourceConfigs);
    this.dataSourceSubscription = this.service.dataSource.subscribe(
      (dataSource) => {
        this.dataSource = dataSource;
      }
    );
  }

  ngOnDestroy() {
    this.dataSourceSubscription.unsubscribe();
  }

  get totalPages(): number {
    if (this.dataSource.count <= this.dataSource.paginateBy) {
      return 1;
    }
    return Math.ceil(this.dataSource.count / this.dataSource.paginateBy);
  }

  pageEvent(e: PageEvent) {
    if (e.pageIndex > e.previousPageIndex) {
      this.service.paginationButtonClicked('next');
    } else {
      this.service.paginationButtonClicked('prev');
    }
  }

  refreshDatagrid(): void {
    this.ngOnDestroy();
    this.ngOnInit();
  }
}
