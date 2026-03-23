import { CommonModule, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ApiServiceService, ApiPost } from '../../services/api-service.service';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-db-pipe-binding',
  standalone: true,
  imports: [CommonModule, CardComponent],
  providers: [DatePipe],
  templateUrl: './db-pipe-binding.component.html',
  styleUrl: './db-pipe-binding.component.scss',
})
export class DbPipeBindingComponent {
  posts: Array<ApiPost & { publishedOn: Date }> = [];
  isLoading = true;
  errorMessage = '';
  readonly today = new Date();

  constructor(private readonly apiService: ApiServiceService) {
    this.apiService.getPosts().subscribe({
      next: (posts) => {
        this.posts = posts.slice(0, 2).map((post, index) => ({
          ...post,
          publishedOn: new Date(2026, 2, 20 - index),
        }));
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = 'Unable to load pipe binding samples right now.';
        this.isLoading = false;
      },
    });
  }
}
