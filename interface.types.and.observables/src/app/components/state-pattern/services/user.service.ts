import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, Observable, throwError } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private http = inject(HttpClient);
  private api = 'https://jsonplaceholder.typicode.com/users';

  getUsers(simulateError = false): Observable<User[]> {
    if (simulateError) {
      return throwError(() => new Error('Simulated API failure')).pipe(
        delay(500),
      );
    }

    return this.http.get<User[]>(this.api).pipe(delay(500));
  }
}
