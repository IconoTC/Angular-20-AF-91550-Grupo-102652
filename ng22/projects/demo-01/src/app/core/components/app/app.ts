import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CourseItem } from '../../../features/courses/components/course-item/course-item';

@Component({
  imports: [RouterOutlet, CourseItem],
  selector: 'ind-root',
  styles: [],
  template: `
    <h1>Hello, {{ title() }}</h1>
    <router-outlet />
    <ind-course-item />
  `,
})
export class App {
  protected readonly title = signal('demo-01');
}
