import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.scss']
})
export class EmployeeCardComponent {

  @Input()
  employeeName: string = '';

  @Output()
  deleteEmployee = new EventEmitter<string>();

  onDelete(): void {
    this.deleteEmployee.emit(this.employeeName);
  }

}
