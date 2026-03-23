import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface ApiUser {
  id: number;
  name: string;
  email: string;
  company: {
    name: string;
  };
}

export interface ApiPost {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface ApiTodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface PicsumPhoto {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  private readonly usersUrl = 'https://jsonplaceholder.typicode.com/users';
  private readonly postsUrl = 'https://jsonplaceholder.typicode.com/posts';
  private readonly todosUrl = 'https://jsonplaceholder.typicode.com/todos';
  private readonly picsumPhotosUrl = 'https://picsum.photos/v2/list';

  constructor(private readonly http: HttpClient) {}

  getUsers(): Observable<ApiUser[]> {
    return this.http.get<ApiUser[]>(this.usersUrl);
  }

  getPosts(): Observable<ApiPost[]> {
    return this.http.get<ApiPost[]>(this.postsUrl);
  }

  getTodos(): Observable<ApiTodo[]> {
    return this.http.get<ApiTodo[]>(this.todosUrl);
  }

  getPhotos(page = 1, limit = 6): Observable<PicsumPhoto[]> {
    return this.http.get<PicsumPhoto[]>(
      `${this.picsumPhotosUrl}?page=${page}&limit=${limit}`,
    );
  }
}
