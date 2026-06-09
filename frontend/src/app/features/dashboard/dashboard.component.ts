import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  title = 'Employee Management System';

  employeeCount = 100;

  constructor() {}

  ngOnInit(): void {
    console.log('Dashboard Loaded');
  }

  increaseCount(): void {
    this.employeeCount++;
  }

}
