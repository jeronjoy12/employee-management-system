import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees = [
    'John Doe - IT',
    'David Smith - HR',
    'Alex Joseph - Finance'
  ];


  constructor() { }
  getEmployees() { return this.employees; }
}
