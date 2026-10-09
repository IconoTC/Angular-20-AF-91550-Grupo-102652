import { Component, computed, signal } from '@angular/core';
import { Card } from '../../../../core/design/card/card';
import { COUNTERS } from '../../data/counters';
import { CounterItem } from '../counter-item/counter-item';
import { CounterState } from '../../types/counter-state';
import { Timestamp } from '../../../../core/design/timestamp/timestamp';

@Component({
  imports: [CounterItem, Card, Timestamp],
  selector: 'ind-counter-list',
  styles: `
  section {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }
      .negative {
      color: red;
    }`,
  template: `
    <p>Valor total: <output [class.negative]="totalValue() < 0">{{ totalValue() }}</output></p>
    <p>Total de clicks: <output>{{ totalClicks() }}</output></p>

    <section>
    @for (counter of counters(); track counter.id) {
      <ind-card>
        <ind-counter-item
          [initialState]="counter"
        (eventChange)="handleChange($event)" />
      </ind-card>
    }
  </section>

    <ind-timestamp />

  `,
})
export class CounterList {

  private readonly totalValue = computed(() => {
    return this.counters().reduce((acc, counter) => acc + counter.count, 0);
  });
  private readonly totalClicks = computed(() => {
    return this.counters().reduce((acc, counter) => acc + counter.clicks, 0);
  });


  private readonly counters = signal(COUNTERS)

  

  handleChange(state: CounterState): void {
    console.log("Event value", state)
    this.counters.update((current) => {
      return current.map((counter) => {
        if (counter.id === state.id) {
          return state;
        }
        return counter;
      });
    });
  }

}
