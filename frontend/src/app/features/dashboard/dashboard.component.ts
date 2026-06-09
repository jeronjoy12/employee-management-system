import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  title = 'Employee Management System';

  employeeCount = 100;
  employeeName = '';

  constructor() {}

  ngOnInit(): void {
    console.log('Dashboard Loaded');
  }

  increaseCount(): void {
    this.employeeCount++;
  }
  saveEmployee(): void {
    console.log(this.employeeName);
  }

}
