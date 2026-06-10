import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "./services/employee.service";
import {Employee} from "../../shared/models/employee";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  department = 'Kevin';
  employeeCount = 100;

  employees: Employee[] = [];


  constructor(
    private employservice:EmployeeService
  ) {
  }

  ngOnInit(): void {

    this.employees = this.employservice.getEmployees();

    this.employservice.saveEmployees();

  }



  handleDelete(name: string): void {

    console.log('Deleted:', name);

  }
  handleDepartment(department: string): void {

    console.log('Selected:', department   );

  }

}
