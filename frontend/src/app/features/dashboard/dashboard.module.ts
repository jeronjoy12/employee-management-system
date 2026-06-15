import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {FormsModule} from "@angular/forms";
import { EmployeeCardComponent } from './employee-card/employee-card.component';
import { DepartmentCardComponent } from './department-card/department-card.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    DashboardComponent,
    EmployeeCardComponent,
    DepartmentCardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class DashboardModule { }
