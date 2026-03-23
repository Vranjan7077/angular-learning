import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { catchError, finalize, Observable, of } from 'rxjs';
import { UserService } from './services/user.service';
import { User } from './models/user.model';
import { CardComponent } from '../../shared/card/card.component';

type ViewMode = 'none' | 'single' | 'all' | 'random';

@Component({
  selector: 'app-async-pipe',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './async-pipe.component.html',
  styleUrl: './async-pipe.component.scss',
})
export class AsyncPipeComponent {
  private readonly maxUserId = 10;
  private userId = 1;
  private userService = inject(UserService);

  isLoading = false;
  mode: ViewMode = 'none';
  errorMessage: string | null = null;

  user$: Observable<User | null> | null = null;
  users$: Observable<User[]> | null = null;

  loadUser(): void {
    this.mode = 'single';
    this.errorMessage = null;
    this.users$ = null;

    this.user$ = this.withLoader(this.userService.getUser(this.userId), null);
    this.userId = this.userId === this.maxUserId ? 1 : this.userId + 1;
  }

  loadUsers(): void {
    this.mode = 'all';
    this.errorMessage = null;
    this.user$ = null;
    this.users$ = this.withLoader(this.userService.getUsers(), []);
  }

  loadRandomUsers(): void {
    this.mode = 'random';
    this.errorMessage = null;
    this.user$ = null;
    this.users$ = this.withLoader(this.userService.getRandomUsers(), []);
  }

  reset(): void {
    this.userId = 1;
    this.mode = 'none';
    this.errorMessage = null;
    this.user$ = null;
    this.users$ = null;
    this.isLoading = false;
  }

  private withLoader<T>(stream: Observable<T>, fallback: T): Observable<T> {
    this.isLoading = true;

    return stream.pipe(
      catchError(() => {
        this.errorMessage = 'Failed to load data. Please try again.';
        return of(fallback);
      }),
      finalize(() => (this.isLoading = false)),
    );
  }
}
