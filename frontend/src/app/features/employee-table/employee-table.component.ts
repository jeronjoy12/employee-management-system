import {Component, OnInit, ViewChildren, QueryList, AfterViewInit, ViewChild} from '@angular/core';
import {Employee} from "../../shared/models/employee";
import {EmployeeService} from "../dashboard/services/employee.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.scss']
})
export class EmployeeTableComponent implements OnInit ,AfterViewInit {
    employees!: Employee[];
    @ViewChildren('employeeRow')
    employeeRow!:QueryList<any>;
  loading = true;
  constructor(
    private employeeService: EmployeeService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.loadEmployees();

  }
  OnDelete(id: number): void {

    this.employeeService.removeEmployee(id);

  }
  OnEdit(id: number): void {
    this.router.navigate(['/employee-form', id]);
  }
  ngAfterViewInit(): void {

    console.log(
      'Total Rows:',
      this.employeeRow.length
    );

  }
  loadEmployees(): void {
    this.loading=true;

    this.employeeService.employees$
      .subscribe(data => {

        console.log(
          'BehaviorSubject emitted:',
          data
        );

        this.employees = data;


        this.loading=false;

      });

  }

}
