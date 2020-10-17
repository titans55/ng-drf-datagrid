import {
  Component,
  OnInit,
  Input,
  OnDestroy,
  TemplateRef,
  Directive,
  AfterContentInit,
  AfterViewInit,
  QueryList,
  ContentChildren,
} from '@angular/core';
import {
  WoDatagridService,
  DataSourceConfigs,
  WoDataSource,
} from '../service/wo-datagrid.service';
import { Subscription } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';
import { HttpClient } from '@angular/common/http';

@Directive({
  selector: '[cellTemplate]',
})
export class CellTemplate {
  @Input() column: string;
  constructor(public template: TemplateRef<any>) {}
}

@Component({
  selector: 'wo-datagrid',
  templateUrl: './wo-datagrid.component.html',
  styleUrls: ['./wo-datagrid.component.css'],
})
export class WoDatagridComponent
  implements OnInit, OnDestroy, AfterContentInit {
  @ContentChildren(CellTemplate)
  cellTemplates: QueryList<CellTemplate>;

  @Input() dataSourceConfigs: DataSourceConfigs;

  public service: WoDatagridService;
  private dataSourceSubscription: Subscription;
  public dataSource: WoDataSource;

  constructor(private httpClient: HttpClient) {
    this.service = new WoDatagridService(httpClient);
  }

  cellTemplatesDict = {};

  ngAfterContentInit() {
    console.log(this.cellTemplates);
    this.cellTemplates.forEach((cellTemplate) => {
      this.cellTemplatesDict[cellTemplate.column] = cellTemplate.template;
    });
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
