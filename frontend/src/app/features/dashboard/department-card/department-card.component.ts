import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-department-card',
  templateUrl: './department-card.component.html',
  styleUrls: ['./department-card.component.scss']
})
export class DepartmentCardComponent implements OnInit {

  @Input()
  department:string='';

  @Output()
  selectDepartment = new EventEmitter<string>();

  SelectDepartment(): void {
    this.selectDepartment.emit(this.department);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
