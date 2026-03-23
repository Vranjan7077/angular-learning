import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { finalize } from 'rxjs';

import { UserService } from './services/user.service';
import { User } from './models/user.model';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-http-observable',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './http-observable.component.html',
  styleUrl: './http-observable.component.scss',
})
export class HttpObservableComponent {
  private readonly maxUserId = 10;
  private userId = 1;
  private userService = inject(UserService);

  users: User[] = [];
  isLoading = false;

  loadUser(): void {
    if (this.isLoading) {
      return;
    }

    this.isLoading = true;

    this.userService
      .getUser(this.userId)
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe((user) => {
        this.users = [...this.users, user];
        this.userId = this.userId === this.maxUserId ? 1 : this.userId + 1;
      });
  }

  reset(): void {
    this.users = [];
    this.userId = 1;
  }
}
