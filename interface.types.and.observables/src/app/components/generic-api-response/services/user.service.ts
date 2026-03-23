import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import { ApiResponse, Post } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private http = inject(HttpClient);
  private api = 'https://jsonplaceholder.typicode.com/posts';

  getPostsResponse(): Observable<ApiResponse<Post[]>> {
    return this.http.get<Post[]>(this.api).pipe(
      map((posts) => ({
        success: true,
        message: 'Posts fetched successfully',
        data: posts.slice(0, 10),
        timestamp: new Date().toISOString(),
      })),
    );
  }
}
