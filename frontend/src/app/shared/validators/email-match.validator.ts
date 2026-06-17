import {
  AbstractControl,
  ValidationErrors
} from '@angular/forms';

export function emailMatchValidator(
  control: AbstractControl
): ValidationErrors | null {

  const email =
    control.get('email')?.value;

  const confirmEmail =
    control.get('confirmEmail')?.value;

  if (email !== confirmEmail) {
    return {
      emailMismatch: true
    };
  }

  return null;
}
