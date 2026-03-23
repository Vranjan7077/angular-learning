import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BehaviorSubjectService {
  private readonly messageSubject = new BehaviorSubject<string>(
    'Initial message from BehaviorSubjectService',
  );

  readonly message$: Observable<string> = this.messageSubject.asObservable();

  updateMessage(message: string): void {
    this.messageSubject.next(message);
  }
}

