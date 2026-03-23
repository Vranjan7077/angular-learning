import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ApiService, Post } from '../../services/api.service';

@Component({
  selector: 'app-user-post-detail-page',
  imports: [CommonModule, RouterLink],
  templateUrl: './user-post-detail-page.component.html',
  styleUrl: './user-post-detail-page.component.scss',
})
export class UserPostDetailPageComponent implements OnInit {
  post: Post | null = null;
  loading = true;
  error: string | null = null;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const postId = Number(params['postId']);

      this.loading = true;
      this.error = null;

      this.apiService.getPostById(postId).subscribe({
        next: (data) => {
          this.post = data;
          this.loading = false;
        },
        error: (err) => {
          this.error = 'Failed to load post details';
          this.loading = false;
          console.error(err);
        },
      });
    });
  }
}
