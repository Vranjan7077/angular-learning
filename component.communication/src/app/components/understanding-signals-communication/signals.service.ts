import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SignalsService {
  readonly message = signal<string>('Initial message from SignalsService');

  updateMessage(message: string): void {
    this.message.set(message);
  }
}
