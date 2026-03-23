import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { catchError, finalize, Observable, of } from 'rxjs';

import { CardComponent } from '../../shared/card/card.component';
import { ApiResponse, Post } from './models/user.model';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-generic-api-response',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './generic-api-response.component.html',
  styleUrl: './generic-api-response.component.scss',
})
export class GenericApiResponseComponent {
  private userService = inject(UserService);

  isLoading = false;
  errorMessage: string | null = null;
  response$: Observable<ApiResponse<Post[]> | null> | null = null;

  loadResponse(): void {
    this.errorMessage = null;
    this.isLoading = true;

    this.response$ = this.userService.getPostsResponse().pipe(
      catchError(() => {
        this.errorMessage =
          'Failed to fetch generic API response. Please try again.';
        return of(null);
      }),
      finalize(() => (this.isLoading = false)),
    );
  }

  reset(): void {
    this.errorMessage = null;
    this.isLoading = false;
    this.response$ = null;
  }
}
