import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import {
  User,
  UserDraft,
  UserPreview,
  UserWithoutContact,
} from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private http = inject(HttpClient);
  private api = 'https://jsonplaceholder.typicode.com/users';

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.api}/${id}`);
  }

  getUserDraft(id: number): Observable<UserDraft> {
    return this.getUser(id).pipe(
      map((user) => ({
        name: user.name,
        email: user.email,
      })),
    );
  }

  getUserPreview(id: number): Observable<UserPreview> {
    return this.getUser(id).pipe(
      map((user) => ({
        id: user.id,
        name: user.name,
        email: user.email,
      })),
    );
  }

  getUserWithoutContact(id: number): Observable<UserWithoutContact> {
    return this.getUser(id).pipe(
      map((user) => ({
        id: user.id,
        name: user.name,
        username: user.username,
      })),
    );
  }
}
