import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeFormRoutingModule } from './employee-form-routing.module';
import { EmployeeFormComponent } from './employee-form.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    EmployeeFormComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    EmployeeFormRoutingModule
  ]
})
export class EmployeeFormModule { }
