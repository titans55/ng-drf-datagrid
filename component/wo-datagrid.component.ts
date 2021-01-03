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

@Directive({
  selector: '[cardViewRowTemplate]',
})
export class CardViewRowTemplate {
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
  private cellTemplates: QueryList<CellTemplate>;

  @ContentChildren(CardViewRowTemplate)
  private cardViewRowTemplates: QueryList<CardViewRowTemplate>;
  cardViewTemplate: TemplateRef<any>


  cellTemplatesDict = {};

  ngAfterContentInit() {
    console.log(this.cellTemplates);
    this.cellTemplates.forEach((cellTemplate) => {
      this.cellTemplatesDict[cellTemplate.column] = cellTemplate.template;
    });
    this.cardViewRowTemplates.forEach((cardViewTemplate) => {
      this.cardViewTemplate = cardViewTemplate.template
    });
  }

  isMobile(): boolean {
    return window.matchMedia('screen and (max-width: 990px)').matches;
  }
}
