import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface LiveApiUser {
  id: number;
  name: string;
  email: string;
}

export interface LiveApiPost {
  id: number;
  userId: number;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root',
})
export class LiveApiDataService {
  private readonly usersUrl = 'https://jsonplaceholder.typicode.com/users';
  private readonly postsUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private readonly http: HttpClient) {}

  getUsers(): Observable<LiveApiUser[]> {
    return this.http.get<LiveApiUser[]>(this.usersUrl);
  }

  getPosts(): Observable<LiveApiPost[]> {
    return this.http.get<LiveApiPost[]>(this.postsUrl);
  }
}
