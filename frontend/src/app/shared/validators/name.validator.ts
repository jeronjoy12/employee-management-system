import {AbstractControl, ValidationErrors} from "@angular/forms";

export function nameValidator(
  control: AbstractControl
): ValidationErrors | null {

  const regex = /^[A-Za-z ]+$/;

  if (!regex.test(control.value)) {
    return {
      invalidName: true
    };
  }

  return null;
}
