import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from "../dashboard.component";
import {EmployeeCardComponent} from "../employee-card/employee-card.component";
import {DepartmentCardComponent} from "./department-card.component";
import {DashboardRoutingModule} from "../dashboard-routing.module";
import {FormsModule} from "@angular/forms";

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

  ]
})
export class DashboardModule { }

