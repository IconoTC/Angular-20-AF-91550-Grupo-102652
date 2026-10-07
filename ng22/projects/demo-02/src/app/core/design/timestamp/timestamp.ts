import { Component, inject } from '@angular/core';
import { TimeService } from '../../service/time.service';

@Component({
  imports: [],
  selector: 'ind-timestamp',
  styles: `
  :host {
    display: inline-block;
    font-size: 0.9em;
    color: var(--color-primary-hot);
    background-color: var(--color-background-primary);
    border: 1px solid var(--color-primary);
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    margin-left: 0.5rem;
  }`,
  template: ` <p>{{ ts.getTime() }}</p>`,
})
export class Timestamp {

  private readonly ts = inject(TimeService)

  // constructor(private readonly ts: TimeService) {}
}
