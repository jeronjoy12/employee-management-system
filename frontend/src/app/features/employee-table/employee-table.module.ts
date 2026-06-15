import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeTableRoutingModule } from './employee-table-routing.module';
import { EmployeeTableComponent } from './employee-table.component';



import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    EmployeeTableComponent
  ],
  imports: [
    CommonModule,
    EmployeeTableRoutingModule,
    SharedModule
  ]
})
export class EmployeeTableModule { }
