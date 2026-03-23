import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ApiServiceService } from '../../services/api-service.service';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-db-two-way-binding',
  standalone: true,
  imports: [CommonModule, FormsModule, CardComponent],
  templateUrl: './db-two-way-binding.component.html',
  styleUrl: './db-two-way-binding.component.scss',
})
export class DbTwoWayBindingComponent {
  isLoading = true;
  errorMessage = '';
  successMessage = '';

  profile = {
    name: '',
    email: '',
    company: '',
    bio: '',
  };

  constructor(private readonly apiService: ApiServiceService) {
    this.apiService.getUsers().subscribe({
      next: (users) => {
        const user = users[0];

        this.profile = {
          name: user?.name ?? '',
          email: user?.email ?? '',
          company: user?.company.name ?? '',
          bio: `Hi, I'm ${user?.name ?? 'a demo user'} and I enjoy Angular examples.`,
        };

        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = 'Unable to load user profile data right now.';
        this.isLoading = false;
      },
    });
  }

  submitProfile(form: NgForm): void {
    if (form.invalid) {
      this.successMessage = '';
      form.control.markAllAsTouched();
      return;
    }

    this.successMessage = 'Profile looks valid and ready to submit.';
  }
}
