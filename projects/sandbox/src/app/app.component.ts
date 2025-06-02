import { Component, ViewChild } from '@angular/core';
import { MyUiLibModule, Toast } from 'my-ui-lib';

interface ToastContainerElement extends HTMLElement {
  showToast(toast: Toast): void;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MyUiLibModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  @ViewChild('toast')
  toast!: ToastContainerElement;

  showToast() {
    this.toast.showToast({
      title: 'Hello World!',
    });
  }
}
