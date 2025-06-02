import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Toast, ToastItem } from './types';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private toastSubject = new BehaviorSubject<ToastItem[]>([]);
  toasts$ = this.toastSubject.asObservable();

  showToast(toast: Toast) {
    const id = Date.now();

    this.toastSubject.next([
      ...this.toastSubject.getValue(),
      {
        ...toast,
        id,
      },
    ]);

    setTimeout(() => this.removeToast(id), 3000);
  }

  removeToast(id: number) {
    const updatedToasts = this.toastSubject
      .getValue()
      .filter((toast) => toast.id !== id);
    this.toastSubject.next(updatedToasts);
  }
}
