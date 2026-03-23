import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../shared/card/card.component';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ApiServiceService, ApiUser } from '../../services/api-service.service';

@Component({
  selector: 'app-db-async-pipe',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './db-async-pipe.component.html',
  styleUrl: './db-async-pipe.component.scss',
})
export class DbAsyncPipeComponent {
  errorMessage = '';
  readonly users$: Observable<ApiUser[]>;

  constructor(private readonly apiService: ApiServiceService) {
    this.users$ = this.apiService.getUsers().pipe(
      map((users) => users.slice(0, 2)),
      catchError(() => {
        this.errorMessage = 'Unable to load async user samples right now.';
        return of([]);
      }),
    );
  }
}
