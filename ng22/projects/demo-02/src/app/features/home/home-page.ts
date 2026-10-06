import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'ind-home-page',
  styleUrls: ['../pages.css'],
  styles: ``,
  template: ` <h2>{{ title()}}</h2> `,
})
export default class HomePage {
  private readonly title = signal('Home')
}
