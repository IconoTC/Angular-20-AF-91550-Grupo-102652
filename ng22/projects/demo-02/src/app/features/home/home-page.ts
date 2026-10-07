import { Component, signal } from '@angular/core';
import { Info } from './components/info/info';

@Component({
  imports: [Info],
  selector: 'ind-home-page',
  styleUrls: ['../pages.css'],
  styles: ``,
  template: ` 
    <h2>{{ title()}}</h2> 
    <ind-info />
  `,
})
export default class HomePage {
  private readonly title = signal('Home')
}
