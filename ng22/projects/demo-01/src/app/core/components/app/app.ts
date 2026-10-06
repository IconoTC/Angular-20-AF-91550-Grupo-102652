import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CourseItem } from '../../../features/courses/components/course-item/course-item';
import { CourseItemSignals } from '../../../features/courses/components/course-item-signals/course-item-signals';

@Component({
  imports: [RouterOutlet, CourseItem, CourseItemSignals],
  selector: 'ind-root',
  styles: `
  `,
  template: `
    <h1>Hello, {{ title() }}</h1>
    <p>Welcome to {{ title() }}!</p>
    <router-outlet />
    <ind-course-item />
    <ind-course-item-signals />
  `,

})
export class App {
  private readonly title = signal('Demo 01');
}
