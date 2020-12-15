import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  WoDatagridComponent,
  CellTemplate,
} from './component/wo-datagrid.component';
import { WoPipesModule } from './pipes/wo-pipes.module';
import { RouterModule } from '@angular/router';
import { WoDatagridCellComponent } from './component/wo-datagrid-cell/wo-datagrid-cell.component';
import { MaterialModule } from '@app/material.module';
import { TranslateModule } from '@ngx-translate/core';
import { NgDrfListModule } from './ng-drf-list/ng-drf-list.module';
import { WoLoaderComponent } from './component/wo-loader/wo-loader.component';

@NgModule({
  imports: [
    CommonModule,
    WoPipesModule,
    MaterialModule,
    RouterModule,
    TranslateModule,
    NgDrfListModule
  ],
  declarations: [WoDatagridComponent, WoDatagridCellComponent, CellTemplate, WoLoaderComponent],
  exports: [WoDatagridComponent, CellTemplate, NgDrfListModule],
  providers: [],
})
export class WoDatagridModule {}
