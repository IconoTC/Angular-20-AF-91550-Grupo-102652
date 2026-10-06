import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'ind-card',
  styles: `
    :host {
      display: block;
      margin: 1rem 0;
      padding: 1rem;
      border: 1px solid var(--color-primary);
      border-radius: 8px;
      box-shadow: 2px 2px 6px color-mix(in srgb, var(--color-text) 20%, transparent);
      text-align: center;
    }
  `,
  template: `<ng-content />`,
})
export class Card {}
