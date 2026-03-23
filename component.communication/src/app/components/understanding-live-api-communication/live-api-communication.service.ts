import { Injectable, signal } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { startWith } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LiveApiCommunicationService {
  private readonly sharedMessageSubject = new Subject<string>();
  private readonly behaviorMessageSubject = new BehaviorSubject<string>(
    'No BehaviorSubject message yet.',
  );

  readonly sharedMessage$ = this.sharedMessageSubject.pipe(
    startWith('No shared service message yet.'),
  );
  readonly behaviorMessage$ = this.behaviorMessageSubject.asObservable();
  readonly signalMessage = signal<string>('No Signals message yet.');

  publish(message: string): void {
    this.sharedMessageSubject.next(message);
    this.behaviorMessageSubject.next(message);
    this.signalMessage.set(message);
  }
}

