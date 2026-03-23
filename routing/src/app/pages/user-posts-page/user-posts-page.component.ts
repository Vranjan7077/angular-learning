import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CardComponent } from '../../shared/card/card.component';
import { ApiService, Post } from '../../services/api.service';

@Component({
  selector: 'app-user-posts-page',
  imports: [CommonModule, RouterLink, CardComponent],
  templateUrl: './user-posts-page.component.html',
  styleUrl: './user-posts-page.component.scss',
})
export class UserPostsPageComponent implements OnInit {
  posts: Post[] = [];
  loading = true;
  error: string | null = null;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.parent?.params.subscribe((params) => {
      const userId = Number(params['id']);
      this.apiService.getUserPosts(userId).subscribe({
        next: (data) => {
          this.posts = data;
          this.loading = false;
        },
        error: (err) => {
          this.error = 'Failed to load posts';
          this.loading = false;
          console.error(err);
        },
      });
    });
  }
}
