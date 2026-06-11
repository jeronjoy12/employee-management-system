import { Component, OnInit } from '@angular/core';
import {Employee} from "../../shared/models/employee";
import {EmployeeService} from "../dashboard/services/employee.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.scss']
})
export class EmployeeTableComponent implements OnInit {
    employees!: Employee[];
  constructor(
    private employeeService: EmployeeService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.employees = this.employeeService.getEmployees();

  }
  OnDelete(id: number): void {
    this.employeeService.removeEmployee(id)
    this.employees = this.employeeService.getEmployees();

  }
  OnEdit(id: number): void {
    this.router.navigate(['/employee-form', id]);
  }

}
