import { Component, signal } from '@angular/core';
import { CounterList } from './components/counter-list/counter-list';

@Component({
  imports: [CounterList],
  selector: 'ind-dashboard-page',
  styleUrls: ['../pages.css'],
  styles: `
  :host {
    display: block;
    width: 90vw

  }`,
  template: `
    <h2>{{ title() }}</h2>
    <ind-counter-list />

    `,
})
export default class DashboardPage {
  private readonly title = signal('Dashboard');
}
