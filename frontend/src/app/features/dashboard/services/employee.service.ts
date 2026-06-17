import { Injectable } from '@angular/core';
import {Employee} from "../../../shared/models/employee";
import { Observable, of, BehaviorSubject } from 'rxjs';

import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  private apiUrl = 'http://localhost:3000/employees';
  constructor( private http: HttpClient) {}




  getEmployees(): Observable<Employee[]> {

    return this.http.get<Employee[]>(this.apiUrl)
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
