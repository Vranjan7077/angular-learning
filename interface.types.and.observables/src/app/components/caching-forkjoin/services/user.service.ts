import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, map, Observable, shareReplay } from 'rxjs';
import {
  CachedUserResult,
  Post,
  User,
  UserPostsResult,
} from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private http = inject(HttpClient);
  private userApi = 'https://jsonplaceholder.typicode.com/users';
  private postApi = 'https://jsonplaceholder.typicode.com/posts';

  private userCache = new Map<number, Observable<User>>();

  getCachedUser(userId: number): Observable<CachedUserResult> {
    const hasCache = this.userCache.has(userId);

    if (!hasCache) {
      const request$ = this.http
        .get<User>(`${this.userApi}/${userId}`)
        .pipe(shareReplay(1));
      this.userCache.set(userId, request$);
    }

    return this.userCache.get(userId)!.pipe(
      map((user) => ({
        user,
        fromCache: hasCache,
      })),
    );
  }

  getUserAndPosts(userId: number): Observable<UserPostsResult> {
    return forkJoin({
      user: this.http.get<User>(`${this.userApi}/${userId}`),
      posts: this.http.get<Post[]>(`${this.postApi}?userId=${userId}`),
    });
  }

  clearCache(): void {
    this.userCache.clear();
  }
}
