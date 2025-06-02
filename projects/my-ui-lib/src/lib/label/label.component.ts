import { Component } from '@angular/core';

@Component({
  selector: 'ui-label',
  standalone: true,
  template: `<label><ng-content /></label>`,
})
export class LabelComponent {}
