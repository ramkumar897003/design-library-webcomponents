import { AfterViewInit, Component, inject } from '@angular/core';
import { ToastService } from './toast.service';
import { AsyncPipe } from '@angular/common';
import { Toast } from './types';

@Component({
  selector: 'ui-toast-provider',
  styleUrls: ['./toast-provider.component.scss'],
  templateUrl: './toast-provider.component.html',
  standalone: true,
  imports: [AsyncPipe],
})
export class ToastProviderComponent implements AfterViewInit {
  toastService = inject(ToastService);

  ngAfterViewInit(): void {
    (this as any)['showToast'] = (toast: Toast) => {
      this.toastService.showToast(toast);
    };
  }
}
