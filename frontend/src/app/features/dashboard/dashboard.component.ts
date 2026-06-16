import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "./services/employee.service";
import {Employee} from "../../shared/models/employee";
import {Router} from "@angular/router";
import {DepartmentService} from "./services/department.service";
import {Department} from "../../shared/models/department";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  departments: Department[] = [];

  employeeCount = 100;

  employees: Employee[] = [];



  constructor(
    private employservice:EmployeeService,
    private router: Router,
    private departmentService: DepartmentService
  ) {
  }

  ngOnInit(): void {
    this.departmentService.getDepartments()
      .subscribe(departments => {

        this.employservice.getEmployees()
          .subscribe(employees => {

            departments.forEach(dept => {

              dept.employeeCount =
                employees.filter(
                  emp => emp.department === dept.name
                ).length;

            });

            this.departments = departments;

          });

      });
    this.employservice.getEmployees()
    .subscribe(data => {this.employees = data;})



  }


gotoEmployee() {
    this.router.navigate(['/employee-form']);
    console.log("gotoEmployee");
}
  handleDelete(id: number): void {

    console.log('Deleted:',id );

  }
  handleDepartment(department: string): void {

    console.log('Selected:', department   );

  }

}
