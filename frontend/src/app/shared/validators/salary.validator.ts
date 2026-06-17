import { AbstractControl, ValidationErrors } from '@angular/forms';

export function salaryValidator(
  control: AbstractControl
): ValidationErrors | null {

  if (control.value < 10000) {
    return {
      invalidSalary: true
    };
  }

  return null;
}
