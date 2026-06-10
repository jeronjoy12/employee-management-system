import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "./services/employee.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  title = 'Employee Feature Dashboard';

  department = 'HR';
  employeeCount = 100;
  employeeName = 'John Doe';
  employees: string[] = [];
  role = 'admin';
  employee='';
  showEmployees = true;
  showdepartment = true;

  constructor(
    private employservice:EmployeeService
  ) {
  }

  ngOnInit(): void {
    this.employees = this.employservice.getEmployees();

    console.log('Dashboard Loaded');
  }

  increaseCount(): void {
    this.employeeCount++;
  }
  saveEmployee(): void {
    console.log(this.employeeName);
  }
  handleDelete(name: string): void {

    console.log('Deleted:', name);

  }
  handleDepartment(department: string): void {

    console.log('Selected:', department   );

  }

}
