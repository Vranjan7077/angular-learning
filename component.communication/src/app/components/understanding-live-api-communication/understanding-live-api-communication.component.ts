import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import {
  LiveApiDataService,
  LiveApiPost,
  LiveApiUser,
} from './live-api-data.service';
import { LiveApiInputViewComponent } from './live-api-input-view/live-api-input-view.component';
import { LiveApiOutputActionComponent } from './live-api-output-action/live-api-output-action.component';
import { LiveApiSiblingSenderComponent } from './live-api-sibling-sender/live-api-sibling-sender.component';
import { LiveApiSiblingReceiverComponent } from './live-api-sibling-receiver/live-api-sibling-receiver.component';
import { LiveApiServiceSenderComponent } from './live-api-service-sender/live-api-service-sender.component';
import { LiveApiServiceReceiverComponent } from './live-api-service-receiver/live-api-service-receiver.component';

@Component({
  selector: 'app-understanding-live-api-communication',
  standalone: true,
  imports: [
    CardComponent,
    LiveApiInputViewComponent,
    LiveApiOutputActionComponent,
    LiveApiSiblingSenderComponent,
    LiveApiSiblingReceiverComponent,
    LiveApiServiceSenderComponent,
    LiveApiServiceReceiverComponent,
  ],
  templateUrl: './understanding-live-api-communication.component.html',
  styleUrl: './understanding-live-api-communication.component.scss',
})
export class UnderstandingLiveApiCommunicationComponent implements OnInit {
  users: LiveApiUser[] = [];
  posts: LiveApiPost[] = [];
  filteredPosts: LiveApiPost[] = [];

  currentUserIndex = 0;
  currentPostIndex = 0;
  filterTerm = '';
  loading = false;
  errorMessage = '';

  constructor(private readonly liveApiDataService: LiveApiDataService) {}

  get currentUser(): LiveApiUser | null {
    return this.users[this.currentUserIndex] ?? null;
  }

  get currentPost(): LiveApiPost | null {
    return this.posts[this.currentPostIndex] ?? null;
  }

  ngOnInit(): void {
    this.loadApiData();
  }

  loadApiData(): void {
    this.loading = true;
    this.errorMessage = '';

    this.liveApiDataService.getUsers().subscribe({
      next: (users) => {
        this.users = users;
      },
      error: () => {
        this.errorMessage = 'Failed to load users from API.';
      },
    });

    this.liveApiDataService.getPosts().subscribe({
      next: (posts) => {
        this.posts = posts.slice(0, 12);
        this.applyFilter(this.filterTerm);
        this.loading = false;
      },
      error: () => {
        this.errorMessage = 'Failed to load posts from API.';
        this.loading = false;
      },
    });
  }

  showNextPost(): void {
    if (!this.posts.length) {
      return;
    }
    this.currentPostIndex = (this.currentPostIndex + 1) % this.posts.length;
  }

  updateFilter(term: string): void {
    this.filterTerm = term.trim();
    this.applyFilter(this.filterTerm);
  }

  private applyFilter(term: string): void {
    const normalizedTerm = term.toLowerCase();
    this.filteredPosts = this.posts.filter((post) =>
      post.title.toLowerCase().includes(normalizedTerm),
    );
  }
}
