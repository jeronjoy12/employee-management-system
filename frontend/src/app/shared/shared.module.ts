import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent } from './components/card/card.component';
import { EmployeeNamePipe } from './pipes/employee-name.pipe';

@NgModule({
  declarations: [
    CardComponent,
    EmployeeNamePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    EmployeeNamePipe
  ]
})
export class SharedModule { }
