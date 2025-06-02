import {
  CUSTOM_ELEMENTS_SCHEMA,
  DoBootstrap,
  Injector,
  NgModule,
} from '@angular/core';
import { ToastProviderComponent } from './toast-provider/toast-provider.component';
import { createCustomElement } from '@angular/elements';
import { LabelComponent } from './label/label.component';

@NgModule({
  imports: [ToastProviderComponent, LabelComponent],
  exports: [ToastProviderComponent, LabelComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MyUiLibModule implements DoBootstrap {
  constructor(private injector: Injector) {}

  ngDoBootstrap(): void {
    this.defineLabelComponent();
    this.defineToastComponent();
  }

  private defineToastComponent() {
    const toastElement = createCustomElement(ToastProviderComponent, {
      injector: this.injector,
    });
    customElements.define('ui-toast-provider', toastElement);
  }

  private defineLabelComponent() {
    const labelElement = createCustomElement(LabelComponent, {
      injector: this.injector,
    });
    customElements.define('ui-label', labelElement);
  }
}
