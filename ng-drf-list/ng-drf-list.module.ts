import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgDrfListComponent, RowTemplate } from './ng-drf-list.component';
import { MaterialModule } from '@app/material.module';

@NgModule({
  imports: [
    CommonModule, MaterialModule
  ],
  declarations: [NgDrfListComponent, RowTemplate],
  exports: [NgDrfListComponent, RowTemplate]

})
export class NgDrfListModule { }
