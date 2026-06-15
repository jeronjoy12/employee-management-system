import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'employeeName'
})
export class EmployeeNamePipe implements PipeTransform {

  transform(value:string): string{
    return value.toUpperCase();
  }

}
