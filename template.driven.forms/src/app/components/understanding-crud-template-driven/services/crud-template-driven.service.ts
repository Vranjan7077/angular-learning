import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CrudUser } from '../models/user-crud.model';

@Injectable({ providedIn: 'root' })
export class CrudTemplateDrivenService {
  private readonly apiUrl = 'http://localhost:3000/users';

  constructor(private readonly http: HttpClient) {}

  getUsers(): Observable<CrudUser[]> {
    return this.http.get<CrudUser[]>(this.apiUrl);
  }

  createUser(user: CrudUser): Observable<CrudUser> {
    return this.http.post<CrudUser>(this.apiUrl, user);
  }

  updateUser(user: CrudUser): Observable<CrudUser> {
    return this.http.put<CrudUser>(`${this.apiUrl}/${user.id}`, user);
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
