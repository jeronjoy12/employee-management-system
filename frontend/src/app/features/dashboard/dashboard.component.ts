import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "./services/employee.service";
import {Employee} from "../../shared/models/employee";
import {Router} from "@angular/router";

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
    private employservice:EmployeeService,
    private router: Router
  ) {
  }

  ngOnInit(): void {

    this.employservice.getEmployees()
      .subscribe(data => {
        this.employees = data;
      });

    this.employservice.saveEmployees();

  }


gotoEmployee() {
    this.router.navigate(['/employee-form']);
    console.log("gotoEmployee");
}
  handleDelete(name: string): void {

    console.log('Deleted:', name);

  }
  handleDepartment(department: string): void {

    console.log('Selected:', department   );

  }

}
