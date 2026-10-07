import { Component,  output, signal } from '@angular/core';

const COUNTER_LIMIT = 5;

@Component({
  imports: [],
  selector: 'ind-counter',
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

    <p>
      counter value: <output [class.negative]="count() < 0">{{ count() }}</output>
    </p>

    <p>
      clicks: <output>{{ clicks() }}</output>
    </p>
    <div>
      <button (click)="changeCount(1)" title="Increment"
      [disabled]="count() >= limit()"
      >➕</button>
      <button (click)="changeCount(-1)" title="Decrement"
      [disabled]="count() <= -limit()"
      >➖</button>
      <button (click)="resetCount()" title="Reset"
      [disabled]="count() === 0 && clicks() === 0"
      >🟣</button>
    </div>
    <div>
      <p [hidden]="count() < limit()">Has alcanzado el límite de {{ limit() }} clics</p>
    @if (count() <= -limit()) {
      <p>Has alcanzado el límite de -{{ limit() }} clics</p>
    }
  </div>
  `,
})
export class Counter {

  // @Output() eventChange = new EventEmitter<number>()
  readonly eventChange = output<number>();

  private readonly count = signal(0);
  private readonly clicks = signal(0);

  private readonly limit = signal(COUNTER_LIMIT);

  changeCount(delta: number): void {
    this.count.update((value) => value + delta);
    this.clicks.update((value) => value + 1);
    this.eventChange.emit(delta);
  }

  resetCount(): void {
    this.count.set(0);
    this.clicks.set(0);
  }
}
