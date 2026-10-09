import { Component, signal } from '@angular/core';
import { Socials } from '../socials/socials';

@Component({
  imports: [Socials],
  selector: 'ind-footer',
  styles: `
    :host {
      background-color: var(--color-background-primary);
      color: var(--color-primary-hot);
      display: flex;
      justify-content: center;
      align-items: center;
      border-top: 2px solid var(--color-primary);
      margin-top: 1rem;
      padding-block-start: 1rem;
      min-height: 10vh;
    }
    footer {
      text-align: center;
    }
    address {
      font-style: normal;
    }
  `,
  template: `
    <footer>
      <address>
        <p>{{ autor() }}</p>
        <p>{{ brand() }} © {{ today().getFullYear() }}</p>
      </address>
      <ind-socials />
    </footer>
  `,
})
export class Footer {
  private readonly autor = signal('Alejandro Cerezo');
  private readonly brand = signal('ICONO Training for Indra');
  private readonly today = signal(new Date());
}
