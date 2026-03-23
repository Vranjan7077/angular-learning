import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  catchError,
  map,
  merge,
  Observable,
  of,
  startWith,
  Subject,
  switchMap,
  tap,
} from 'rxjs';

import { CardComponent } from '../../shared/card/card.component';
import { UserState, ApiStatus } from './models/userState.model';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-state-pattern',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './state-pattern.component.html',
  styleUrl: './state-pattern.component.scss',
})
export class StatePatternComponent {
  private userService = inject(UserService);

  private loadTrigger$ = new Subject<boolean>();
  private resetTrigger$ = new Subject<void>();

  status: ApiStatus = 'idle';

  private idleState: UserState = {
    status: 'idle',
    users: [],
    error: null,
  };

  state$: Observable<UserState> = merge(
    this.loadTrigger$.pipe(
      switchMap((simulateError) =>
        this.userService.getUsers(simulateError).pipe(
          map((users) => ({
            status: 'success' as const,
            users,
            error: null,
          })),
          startWith({
            status: 'loading' as const,
            users: [],
            error: null,
          }),
          catchError(() =>
            of({
              status: 'error' as const,
              users: [],
              error: 'Failed to load users. Please try again.',
            }),
          ),
        ),
      ),
    ),
    this.resetTrigger$.pipe(map(() => this.idleState)),
  ).pipe(
    startWith(this.idleState),
    tap((state) => {
      this.status = state.status;
    }),
  );

  loadUsers(simulateError = false): void {
    this.loadTrigger$.next(simulateError);
  }

  reset(): void {
    this.resetTrigger$.next();
  }
}
