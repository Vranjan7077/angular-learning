import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
}
