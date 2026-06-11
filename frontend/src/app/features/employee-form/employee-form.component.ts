import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router";
import {Employee} from "../../shared/models/employee";
import {EmployeeService} from "../dashboard/services/employee.service";

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {
  employee: Employee = {
    id: 0,
    name: '',
    department: '',
    email: '',
    salary: 0
  };
  constructor(
    private router: Router,
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    const id = Number(
      this.route.snapshot.paramMap.get('id')
    );

    console.log(id);
    const employee = this.employeeService.GetEmployee(id);

    console.log(employee);

    if (employee) {
      this.employee = employee;
    }

  }
  showTable(){
    this.router.navigate(['/employee-table']);
  }
  OnSubmit() {

    if (this.employee.id > 0) {

      this.employeeService.updateEmployee(this.employee);

    } else {

      this.employeeService.addEmployee(this.employee);

    }

  }
}
