import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, map, Observable } from 'rxjs';

import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private http = inject(HttpClient);
  private api = 'https://jsonplaceholder.typicode.com/users';

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.api).pipe(delay(500));
  }

  searchUsers(term: string): Observable<User[]> {
    const searchTerm = term.trim().toLowerCase();

    return this.getUsers().pipe(
      map((users) => {
        if (!searchTerm) {
          return users;
        }

        return users.filter(
          (user) =>
            user.name.toLowerCase().includes(searchTerm) ||
            user.email.toLowerCase().includes(searchTerm),
        );
      }),
    );
  }
}
