import { Component, input, linkedSignal, output, signal } from '@angular/core';
import { CounterState } from '../../types/counter-state';

const COUNTER_LIMIT = 5;

@Component({
  imports: [],
  selector: 'ind-counter-item',
  styles: `
    .negative {
      color: red;
    }
  `,
  template: `
    <!-- <p>
      counter value: <output [class]=" count() < 0 ? 'negative' : ''">{{ count() }}</output>
    </p> -->

    <!-- <p>
      counter value: <output [class]="{negative: count() < 0}">{{ count() }}</output>
    </p> -->
    <h3>Counter {{ state().id }}</h3>
    <p>
      counter value: <output [class.negative]="state().count < 0">{{ state().count }}</output>
    </p>

    <p>
      clicks: <output>{{ state().clicks }}</output>
    </p>
    <div>
      <button (click)="changeCount(1)" title="Increment" [disabled]="state().count >= limit()">
        ➕
      </button>
      <button (click)="changeCount(-1)" title="Decrement" [disabled]="state().count <= -limit()">
        ➖
      </button>
      <button
        (click)="resetCount()"
        title="Reset"
        [disabled]="state().count === 0 && state().clicks === 0"
      >
        🟣
      </button>
    </div>
    <div>
      <p [hidden]="state().count < limit()">Has alcanzado el límite de {{ limit() }} clics</p>
      @if (state().count <= -limit()) {
        <p>Has alcanzado el límite de -{{ limit() }} clics</p>
      }
    </div>
  `,
})
export class CounterItem {
  // @Output() eventChange = new EventEmitter<number>()
  readonly eventChange = output<CounterState>();

  public readonly initialState = input.required<CounterState>();

  public readonly state = linkedSignal<CounterState>(
    () => this.initialState());


  // public readonly state = signal<CounterState>({
  //   id: NaN,
  //   count: NaN,
  //   clicks: NaN
  // });

  // constructor() {
  //   effect(() => {
  //     this.state.set(this.initialState());
  //   });
  // }

  private readonly limit = signal(COUNTER_LIMIT);

  changeCount(delta: number): void {
    this.state.update((current) => ({
      ...current,
      count: current.count + delta,
      clicks: current.clicks + 1,
    }));
    this.eventChange.emit(this.state());
  }

  resetCount(): void {
    this.state.update((current) => ({
      ...current,
      count: 0,
      clicks: 0,
    }));
    this.eventChange.emit(this.state());
  }
}
