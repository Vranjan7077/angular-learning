import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { ApiService, User } from '../../services/api.service';

@Component({
  selector: 'app-user-detail-page',
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './user-detail-page.component.html',
  styleUrl: './user-detail-page.component.scss',
})
export class UserDetailPageComponent implements OnInit {
  user: User | null = null;
  postCount = 0;
  loading = true;
  error: string | null = null;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    public router: Router,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const userId = Number(params['id']);
      this.apiService.getUserById(userId).subscribe({
        next: (data) => {
          this.user = data;
          this.loading = false;
        },
        error: (err) => {
          this.error = 'Failed to load user details';
          this.loading = false;
          console.error(err);
        },
      });

      this.apiService.getUserPosts(userId).subscribe({
        next: (posts) => {
          this.postCount = posts.length;
        },
        error: (err) => {
          console.error(err);
        },
      });
    });
  }
}
