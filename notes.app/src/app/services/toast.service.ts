import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Toast, ToastType } from '../interfaces/toast';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private toastsSubject = new BehaviorSubject<Toast[]>([]);
  public toasts$ = this.toastsSubject.asObservable();
  private counter = 0;

  show(
    message: string,
    type: ToastType = 'success',
    duration: number = 3000,
  ): void {
    const id = ++this.counter;
    const toast: Toast = { id, message, type };
    this.toastsSubject.next([...this.toastsSubject.getValue(), toast]);
    setTimeout(() => this.remove(id), duration);
  }

  remove(id: number): void {
    this.toastsSubject.next(
      this.toastsSubject.getValue().filter((t) => t.id !== id),
    );
  }
}
