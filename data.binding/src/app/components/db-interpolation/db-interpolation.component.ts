import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../shared/card/card.component';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ApiServiceService, ApiUser } from '../../services/api-service.service';

@Component({
  selector: 'app-db-interpolation',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './db-interpolation.component.html',
  styleUrl: './db-interpolation.component.scss',
})
export class DbInterpolationComponent {
  errorMessage = '';
  readonly users$: Observable<ApiUser[]>;

  constructor(private readonly apiService: ApiServiceService) {
    this.users$ = this.apiService.getUsers().pipe(
      map((users) => users.slice(0, 2)),
      catchError(() => {
        this.errorMessage =
          'Unable to load interpolation user samples right now.';
        return of([]);
      }),
    );
  }
}
