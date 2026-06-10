import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import {Employee} from "../../../shared/models/employee";

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.scss']
})
export class EmployeeCardComponent {

  @Input()
  employee!: Employee;

  @Output()
  deleteEmployee = new EventEmitter<string>();

  onDelete(): void {
    this.deleteEmployee.emit(this.employee.name);
  }

}
