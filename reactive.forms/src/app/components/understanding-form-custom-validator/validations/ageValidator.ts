import { AbstractControl, ValidationErrors } from '@angular/forms';

export function ageValidator(control: AbstractControl): ValidationErrors | null {
  const age = Number(control.value);

  if (Number.isNaN(age)) {
    return null;
  }

  return age < 18 ? { underAge: true } : null;
}
