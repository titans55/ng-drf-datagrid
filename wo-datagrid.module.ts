import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  WoDatagridComponent,
  CellTemplate,
  CardViewRowTemplate,
} from './component/wo-datagrid.component';
import { WoPipesModule } from './pipes/wo-pipes.module';
import { RouterModule } from '@angular/router';
import { WoDatagridCellComponent } from './component/wo-datagrid-cell/wo-datagrid-cell.component';
import { NgDrfListModule } from './ng-drf-list/ng-drf-list.module';
import { WoLoaderComponent } from './component/wo-loader/wo-loader.component';
import { MaterialModule } from '../material.module';

@NgModule({
  imports: [
    CommonModule,
    WoPipesModule,
    MaterialModule,
    RouterModule,
    NgDrfListModule,
  ],
  declarations: [
    WoDatagridComponent,
    WoDatagridCellComponent,
    CellTemplate,
    CardViewRowTemplate,
    WoLoaderComponent,
  ],
  exports: [
    WoDatagridComponent,
    CellTemplate,
    CardViewRowTemplate,
    NgDrfListModule,
  ],
  providers: [],
})
export class WoDatagridModule {}
