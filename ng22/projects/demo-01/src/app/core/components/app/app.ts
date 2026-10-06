import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CourseItem } from '../../../features/courses/components/course-item/course-item';
import { CourseItemSignals } from '../../../features/courses/components/course-item-signals/course-item-signals';
import { CourseItemPro } from '../../../features/courses/components/course-item-pro/course-item-pro';

@Component({
  imports: [RouterOutlet, CourseItem, CourseItemSignals, CourseItemPro],
  selector: 'ind-root',
  styles: `
  `,
  template: `
    <h1>Hello, {{ title() }}</h1>
    <p>Welcome to {{ title() }}!</p>
    <router-outlet />
    <ind-course-item-pro />
    <details>   
      <summary>Otros Course Items</summary>
      <ind-course-item />
      <ind-course-item-signals />
    </details>
 
 `,

})
export class App {
  private readonly title = signal('Demo 01');
}
