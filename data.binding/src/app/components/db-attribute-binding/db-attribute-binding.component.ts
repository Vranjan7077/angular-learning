import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ApiServiceService, ApiPost } from '../../services/api-service.service';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-db-attribute-binding',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './db-attribute-binding.component.html',
  styleUrl: './db-attribute-binding.component.scss',
})
export class DbAttributeBindingComponent {
  posts: ApiPost[] = [];
  isLoading = true;
  errorMessage = '';

  constructor(private readonly apiService: ApiServiceService) {
    this.apiService.getPosts().subscribe({
      next: (posts) => {
        this.posts = posts.slice(0, 2);
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage =
          'Unable to load attribute binding samples right now.';
        this.isLoading = false;
      },
    });
  }
}
