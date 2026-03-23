import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private http = inject(HttpClient);
  private api = 'https://jsonplaceholder.typicode.com/users';

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.api}/${id}`);
  }

  getRandomUser(): Observable<User> {
    const randomId = Math.floor(Math.random() * 10) + 1;
    return this.getUser(randomId);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.api);
  }

  getRandomUsers(count = 3): Observable<User[]> {
    return this.getUsers().pipe(
      map((users) =>
        [...users].sort(() => Math.random() - 0.5).slice(0, count),
      ),
    );
  }
}
