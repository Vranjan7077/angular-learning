import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export function usernameValidator(
  control: AbstractControl,
): Observable<ValidationErrors | null> {
  const value = String(control.value ?? '').trim().toLowerCase();
  const usernameTaken = value === 'admin';

  return of(usernameTaken ? { taken: true } : null).pipe(delay(1000));
}
