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


  constructor() { this.loadEmployees()}
  getEmployees() { return this.employees; }

  saveEmployees(): void {
    localStorage.setItem(
      'employees',
      JSON.stringify(this.employees)
    );
  }
  addEmployee(employee: Employee): void {

    const newEmployee = {
      ...employee,
      id: this.employees.length + 1
    };

    this.employees.push(newEmployee);

    this.saveEmployees();
  }
  removeEmployee(id:number): void {
    this.employees = this.employees.filter(employee => employee.id !== id);
    this.saveEmployees()
  }
  loadEmployees(): void {
    const data = localStorage.getItem('employees');

    if (data) {
      this.employees = JSON.parse(data);
    }
  }
  GetEmployee(id:number): Employee|undefined {
    return this.employees.find(employee => employee.id == id);


  }

  updateEmployee(updatedEmployee: Employee): void {

    const index = this.employees.findIndex(
      employee => employee.id === updatedEmployee.id
    );

    if (index !== -1) {
      this.employees[index] = updatedEmployee;
      this.saveEmployees();
    }

  }
}
