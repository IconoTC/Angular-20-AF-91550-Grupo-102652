import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'ind-logo-coders',
  styles: `
    :host {
      display: block;
    }

    path:nth-of-type(1):hover {
      fill: var(--color-primary-hot);
      transform: scale(1.1);
      transition: transform 0.3s ease-in-out;
    }

    path:nth-of-type(2):hover {
      fill: var(--color-tertiary-hot);
      transform: translate(-900px, -900px) scale(1.1);
      transition: transform 0.3s ease-in-out;
    }
  `,
  templateUrl: './logo-coders.svg',
})
export class LogoCoders {
  private readonly size = signal('6rem');
  private readonly upperColor = signal('var(--color-primary)');
  private readonly lowerColor = signal('var(--color-secondary)');

  logoClicked(data: string) {
    console.log('Logo clicked', data);
  }
}
