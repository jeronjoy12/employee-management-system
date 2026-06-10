import { Injectable } from '@angular/core';
import {Employee} from "../../../shared/models/employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees = [
    {
      id: 1,
      name: 'John Doe',
      department: 'IT',
      email: 'john@test.com',
      salary: 50000
    },
    {
      id: 2,
      name: 'David Smith',
      department: 'HR',
      email: 'david@test.com',
      salary: 45000
    }
  ];


  constructor() { }
  getEmployees() { return this.employees; }

  saveEmployees(): void {
    localStorage.setItem(
      'employees',
      JSON.stringify(this.employees)
    );
  }
  loadEmployees(): Employee[] {
    const data = localStorage.getItem('employees');

    if (data) {
      return JSON.parse(data);
    }

    return [];
  }
}
