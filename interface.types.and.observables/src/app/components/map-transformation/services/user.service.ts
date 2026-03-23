import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import { MappedUser, User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private http = inject(HttpClient);
  private api = 'https://jsonplaceholder.typicode.com/users';

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.api);
  }

  getMappedUsers(): Observable<MappedUser[]> {
    return this.getUsers().pipe(
      map((users) =>
        users.map((user) => ({
          id: user.id,
          displayName: `${user.name} (@${user.username})`,
          contact: user.email.toLowerCase(),
        })),
      ),
    );
  }
}
