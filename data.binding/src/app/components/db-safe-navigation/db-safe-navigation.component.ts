import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ApiServiceService, ApiUser } from '../../services/api-service.service';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-db-safe-navigation',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './db-safe-navigation.component.html',
  styleUrl: './db-safe-navigation.component.scss',
})
export class DbSafeNavigationComponent {
  selectedUser: ApiUser | null = null;
  isLoading = true;
  errorMessage = '';

  constructor(private readonly apiService: ApiServiceService) {
    this.apiService.getUsers().subscribe({
      next: (users) => {
        this.selectedUser = users[0] ?? null;
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = 'Unable to load safe navigation sample right now.';
        this.isLoading = false;
      },
    });
  }

  clearSelection(): void {
    this.selectedUser = null;
  }
}
