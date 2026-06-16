import {Component, OnInit, ViewChildren, QueryList, AfterViewInit, ViewChild} from '@angular/core';
import {Employee} from "../../shared/models/employee";
import {EmployeeService} from "../dashboard/services/employee.service";
import {Router} from "@angular/router";
import {FormControl} from "@angular/forms";



@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.scss']
})
export class EmployeeTableComponent implements OnInit ,AfterViewInit {
  searchControl = new FormControl('');

  employees: Employee[] = [];
  filteredEmployees: Employee[] = [];
    @ViewChildren('employeeRow')
    employeeRow!:QueryList<any>;
  loading = true;
  constructor(
    private employeeService: EmployeeService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.loadEmployees();
    this.searchControl.valueChanges
      .subscribe(searchText => {

        this.filteredEmployees =
          this.employees.filter(employee =>
            employee.name
              .toLowerCase()
              .includes(
                searchText?.toLowerCase() || ''
              )
          );

      });

  }
  OnDelete(id: number):void{
    this.employeeService.deleteEmployee(id)
      .subscribe(()=>{
        this.loadEmployees();
      });
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

    this.employeeService.getEmployees()
      .subscribe( {
        next: (employees) => {
          this.employees = employees;
          this.filteredEmployees = employees;

          this.loading=false;
        }
        ,error: err => {
          console.log(err);
          this.loading=false;
        }
      });






  }



}
