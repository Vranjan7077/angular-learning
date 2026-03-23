import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { catchError, finalize, Observable, of, tap } from 'rxjs';

import { CardComponent } from '../../shared/card/card.component';
import { MappedUser } from './models/user.model';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-map-transformation',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './map-transformation.component.html',
  styleUrl: './map-transformation.component.scss',
})
export class MapTransformationComponent {
  private userService = inject(UserService);

  isLoading = false;
  hasLoaded = false;
  errorMessage: string | null = null;
  mappedUsers$: Observable<MappedUser[]> | null = null;

  loadMappedUsers(): void {
    this.errorMessage = null;
    this.isLoading = true;

    this.mappedUsers$ = this.userService.getMappedUsers().pipe(
      tap(() => {
        this.hasLoaded = true;
      }),
      catchError(() => {
        this.errorMessage = 'Failed to load users. Please try again.';
        return of([]);
      }),
      finalize(() => (this.isLoading = false)),
    );
  }

  reset(): void {
    this.errorMessage = null;
    this.isLoading = false;
    this.hasLoaded = false;
    this.mappedUsers$ = null;
  }
}
