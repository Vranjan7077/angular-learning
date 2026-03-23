import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {
  catchError,
  debounceTime,
  finalize,
  Observable,
  of,
  startWith,
  switchMap,
  tap,
} from 'rxjs';

import { CardComponent } from '../../shared/card/card.component';
import { User } from './models/user.model';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-switch-map',
  standalone: true,
  imports: [CardComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './switch-map.component.html',
  styleUrl: './switch-map.component.scss',
})
export class SwitchMapComponent {
  private userService = inject(UserService);

  search = new FormControl('', { nonNullable: true });
  isLoading = false;
  errorMessage: string | null = null;

  users$: Observable<User[]> = this.search.valueChanges.pipe(
    startWith(this.search.value),
    debounceTime(300),
    tap(() => {
      this.isLoading = true;
      this.errorMessage = null;
    }),
    switchMap((term) =>
      this.userService.searchUsers(term).pipe(
        catchError(() => {
          this.errorMessage = 'Failed to load users. Please try again.';
          return of([]);
        }),
        finalize(() => (this.isLoading = false)),
      ),
    ),
  );
}
