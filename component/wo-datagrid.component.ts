import {
  AfterContentInit, Component,
  ContentChildren, Directive, Input,
  OnDestroy, OnInit,
  QueryList, TemplateRef
} from '@angular/core';
import { BaseDrfDatasourceComponent } from '../base/base-drf-datasource.component';

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
export class WoDatagridComponent extends BaseDrfDatasourceComponent 
  implements OnInit, OnDestroy, AfterContentInit {
  @ContentChildren(CellTemplate)
  cellTemplates: QueryList<CellTemplate>;

  cellTemplatesDict = {};

  ngAfterContentInit() {
    console.log(this.cellTemplates);
    this.cellTemplates.forEach((cellTemplate) => {
      this.cellTemplatesDict[cellTemplate.column] = cellTemplate.template;
    });
  }
}
