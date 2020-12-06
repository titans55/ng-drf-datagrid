import { AfterContentInit, Component, ContentChildren, Directive, OnDestroy, OnInit, QueryList, TemplateRef,  } from '@angular/core';
import { BaseDrfDatasourceComponent } from '../base/base-drf-datasource.component';

@Directive({
  selector: '[rowTemplate]',
})
export class RowTemplate {
  constructor(public template: TemplateRef<any>) {}
}

@Component({
  selector: 'ng-drf-list',
  templateUrl: './ng-drf-list.component.html',
  styleUrls: ['./ng-drf-list.component.scss']
})
export class NgDrfListComponent extends BaseDrfDatasourceComponent implements OnInit, OnDestroy, AfterContentInit {
  @ContentChildren(RowTemplate)
  private rowTemplates: QueryList<RowTemplate>;

  rowTemplate: any;
  
  ngAfterContentInit() {
    if(this.rowTemplates.length){
      this.rowTemplates.forEach(rowTemplate=>{
        this.rowTemplate = rowTemplate.template
      })
    }
  }
}
