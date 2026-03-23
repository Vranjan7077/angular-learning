import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { catchError, finalize, forkJoin, of } from 'rxjs';

import { CardComponent } from '../../shared/card/card.component';
import {
  User,
  UserDraft,
  UserPreview,
  UserWithoutContact,
} from './models/user.model';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-partial-pick-omit',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './partial-pick-omit.component.html',
  styleUrl: './partial-pick-omit.component.scss',
})
export class PartialPickOmitComponent {
  private readonly userService = inject(UserService);

  readonly userId = 1;

  isLoading = false;
  errorMessage: string | null = null;

  fullUser: User | null = null;
  userDraft: UserDraft | null = null;
  userPreview: UserPreview | null = null;
  userWithoutContact: UserWithoutContact | null = null;

  loadData(): void {
    this.isLoading = true;
    this.errorMessage = null;

    forkJoin({
      fullUser: this.userService.getUser(this.userId),
      userDraft: this.userService.getUserDraft(this.userId),
      userPreview: this.userService.getUserPreview(this.userId),
      userWithoutContact: this.userService.getUserWithoutContact(this.userId),
    })
      .pipe(
        catchError(() => {
          this.errorMessage = 'Failed to load user data. Please try again.';
          return of(null);
        }),
        finalize(() => (this.isLoading = false)),
      )
      .subscribe((result) => {
        if (!result) {
          return;
        }

        this.fullUser = result.fullUser;
        this.userDraft = result.userDraft;
        this.userPreview = result.userPreview;
        this.userWithoutContact = result.userWithoutContact;
      });
  }

  reset(): void {
    this.errorMessage = null;
    this.isLoading = false;
    this.fullUser = null;
    this.userDraft = null;
    this.userPreview = null;
    this.userWithoutContact = null;
  }
}
