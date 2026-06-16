import {Component, OnInit} from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router";
import {Employee} from "../../shared/models/employee";
import {EmployeeService} from "../dashboard/services/employee.service";

import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-employee-form',

  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']

})
export class EmployeeFormComponent implements OnInit{


  employeeId = 0;

  constructor(
    private router: Router,
    private employeeService: EmployeeService,
    private route: ActivatedRoute
  ) {}
  employeeForm = new FormGroup({
    name: new FormControl('', Validators.required),
    department: new FormControl('', Validators.required),
    email: new FormControl('',[Validators.required, Validators.email]),
    salary: new FormControl(0,[Validators.required,Validators.min(1)])
  });

  ngOnInit(): void {

    const id = Number(
      this.route.snapshot.paramMap.get('id')
    );

    this.employeeId = id;

    if (id > 0) {

      this.employeeService
        .GetEmployee(id)
        .subscribe((employee: Employee) => {

          this.employeeForm.patchValue({
            name: employee.name,
            department: employee.department,
            email: employee.email,
            salary: employee.salary
          });

        });

    }

  }


  showTable(){
    this.router.navigate(['/employee-table']);
  }
  OnSubmit(): void {

    const employeeData: Employee = {
      id: this.employeeId,
      name: this.employeeForm.value.name ?? '',
      department: this.employeeForm.value.department ?? '',
      email: this.employeeForm.value.email ?? '',
      salary: this.employeeForm.value.salary ?? 0
    };

    if (this.employeeId > 0) {

      this.employeeService
        .updateEmployee(employeeData)
        .subscribe();

    } else {

      this.employeeService
        .addEmployee(employeeData)
        .subscribe({
          next: (response) => {
            console.log('Employee saved', response);
          },
          error: (err) => {
            console.error(err);
          }
        });

    }

  }


}
