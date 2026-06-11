import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeTableRoutingModule } from './employee-table-routing.module';
import { EmployeeTableComponent } from './employee-table.component';


@NgModule({
  declarations: [
    EmployeeTableComponent
  ],
  imports: [
    CommonModule,
    EmployeeTableRoutingModule
  ]
})
export class EmployeeTableModule { }
