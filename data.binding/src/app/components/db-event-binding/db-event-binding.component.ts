import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ApiPost, ApiServiceService } from '../../services/api-service.service';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-db-event-binding',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './db-event-binding.component.html',
  styleUrl: './db-event-binding.component.scss',
})
export class DbEventBindingComponent {
  posts: ApiPost[] = [];
  selectedIndex = 0;
  isLoading = false;
  errorMessage = '';

  constructor(private readonly apiService: ApiServiceService) {}

  get selectedPost(): ApiPost | null {
    return this.posts[this.selectedIndex] ?? null;
  }

  loadPosts(): void {
    this.isLoading = true;
    this.errorMessage = '';

    this.apiService.getPosts().subscribe({
      next: (posts) => {
        this.posts = posts.slice(0, 5);
        this.selectedIndex = 0;
        this.isLoading = false;
      },
      error: () => {
        this.posts = [];
        this.errorMessage = 'Unable to load post samples right now.';
        this.isLoading = false;
      },
    });
  }

  showPrevious(): void {
    if (!this.posts.length) {
      return;
    }

    this.selectedIndex =
      (this.selectedIndex - 1 + this.posts.length) % this.posts.length;
  }

  showNext(): void {
    if (!this.posts.length) {
      return;
    }

    this.selectedIndex = (this.selectedIndex + 1) % this.posts.length;
  }

  selectPost(index: number): void {
    this.selectedIndex = index;
  }

  surpriseMe(): void {
    if (!this.posts.length) {
      return;
    }

    this.selectedIndex = Math.floor(Math.random() * this.posts.length);
  }
}
