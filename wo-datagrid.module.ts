import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  WoDatagridComponent,
  CellTemplate,
} from './component/wo-datagrid.component';
import { WoDatagridService } from './service/wo-datagrid.service';
import { WoPipesModule } from './pipes/wo-pipes.module';
import { RouterModule } from '@angular/router';
import { WoDatagridCellComponent } from './component/wo-datagrid-cell/wo-datagrid-cell.component';
import { MaterialModule } from '@app/material.module';

@NgModule({
  imports: [CommonModule, WoPipesModule, MaterialModule, RouterModule],
  declarations: [WoDatagridComponent, WoDatagridCellComponent, CellTemplate],
  exports: [WoDatagridComponent, CellTemplate],
  providers: [WoDatagridService],
})
export class WoDatagridModule {}
