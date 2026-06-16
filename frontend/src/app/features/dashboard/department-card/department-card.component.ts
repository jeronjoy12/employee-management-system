import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Department} from "../../../shared/models/department";
@Component({
  selector: 'app-department-card',
  templateUrl: './department-card.component.html',
  styleUrls: ['./department-card.component.scss']
})
export class DepartmentCardComponent implements OnInit {

  @Input()
  department!: Department;

  @Output()
  selectDepartment = new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
  }

}
