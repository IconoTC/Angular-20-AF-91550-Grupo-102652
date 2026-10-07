import { Component, signal } from '@angular/core';
import { Counter } from '../counter/counter';
import { Card } from '../../../../core/design/card/card';
import { COUNTERS } from '../../data/counters';



@Component({
  imports: [Counter, Card],
  selector: 'ind-counter-list',
  styles: ``,
  template: `
    <p>Valor total: <output>{{ totalValue() }}</output></p>
    <p>Total de clicks: <output>{{ totalClicks() }}</output></p>

    @for (counter of counters(); track counter.id) {
      <ind-card>
        <ind-counter (eventChange)="handleChange($event)" />
      </ind-card>
    }

  `,
})
export class CounterList {

  private readonly totalValue = signal(0);
  private readonly totalClicks = signal(0);


  private readonly counters = signal(COUNTERS)


  handleChange(value: number): void {
    console.log("Event value", value)
    this.totalValue.update((current) => current + value);
    this.totalClicks.update((current) => current + 1);
  }

}
