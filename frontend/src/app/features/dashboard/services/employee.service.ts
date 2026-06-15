import { Injectable } from '@angular/core';
import {Employee} from "../../../shared/models/employee";
import { Observable, of, BehaviorSubject } from 'rxjs';
import{delay} from 'rxjs/operators';
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


  constructor() { this.loadEmployees(),
    this.employeesSubject.next(
      this.employees);}
  private employeesSubject =
    new BehaviorSubject<Employee[]>([]);

  employees$ =
    this.employeesSubject.asObservable();
  getEmployees(): Observable<Employee[]> {

    return of(this.employees).pipe(delay(2000));
  }

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
    this.employeesSubject.next(
      this.employees
    );
  }
  removeEmployee(id:number): void {
    this.employees = this.employees.filter(employee => employee.id !== id);
    this.saveEmployees()
    this.employeesSubject.next(
      this.employees
    );
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
      this.employeesSubject.next(
        this.employees
      );
    }

  }
}
