import { Injectable } from '@angular/core';
import {Employee} from "../../../shared/models/employee";
import { Observable, of, BehaviorSubject } from 'rxjs';
import{delay} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http'
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

  private apiUrl = 'http://localhost:3000/employees';
  constructor( private http: HttpClient) {}

  private employeesSubject =
    new BehaviorSubject<Employee[]>([]);

  employees$ =
    this.employeesSubject.asObservable();
  getEmployees(): Observable<Employee[]> {

    return this.http.get<Employee[]>(this.apiUrl)
  }

  saveEmployees(): void {
    localStorage.setItem(
      'employees',
      JSON.stringify(this.employees)
    );
  }
  addEmployee(employee: Employee):Observable<Employee> {
    return this.http.post<Employee>(this.apiUrl, employee)

  }
  deleteEmployee(id: number): Observable<void> {
    return this.http.delete<void>(
      `${this.apiUrl}/${id}`
    );
  }

  GetEmployee(id:number): Observable<Employee> {
    return this.http.get<Employee>(`${this.apiUrl}/${id}`)


  }

  updateEmployee(employee: Employee): Observable<Employee> {
      return  this.http.put<Employee>(
        `${this.apiUrl}/${employee.id}`,
        employee
      )
  }
}
