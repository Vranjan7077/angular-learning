import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../shared/card/card.component';
import { CachedUserResult, UserPostsResult } from './models/user.model';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-caching-forkjoin',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './caching-forkjoin.component.html',
  styleUrl: './caching-forkjoin.component.scss',
})
export class CachingForkjoinComponent {
  private userService = inject(UserService);

  isLoading = false;
  errorMessage: string | null = null;

  cachedUser: CachedUserResult | null = null;
  combinedResult: UserPostsResult | null = null;

  loadCachedUser(): void {
    this.startRequest();

    this.userService.getCachedUser(1).subscribe({
      next: (result) => {
        this.cachedUser = result;
        this.isLoading = false;
      },
      error: () => this.failRequest(),
    });
  }

  loadUserAndPosts(): void {
    this.startRequest();

    this.userService.getUserAndPosts(1).subscribe({
      next: (result) => {
        this.combinedResult = result;
        this.isLoading = false;
      },
      error: () => this.failRequest(),
    });
  }

  reset(): void {
    this.userService.clearCache();
    this.isLoading = false;
    this.errorMessage = null;
    this.cachedUser = null;
    this.combinedResult = null;
  }

  private startRequest(): void {
    this.isLoading = true;
    this.errorMessage = null;
  }

  private failRequest(): void {
    this.isLoading = false;
    this.errorMessage = 'Request failed. Please try again.';
  }
}
