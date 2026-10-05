import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CourseItem } from '../../../features/courses/components/course-item/course-item';

@Component({
  imports: [RouterOutlet, CourseItem],
  selector: 'ind-root',
  styles: `
  `,
  template: `
    <h1>Hello, {{ title() }}</h1>
    <p>Welcome to {{ title() }}!</p>
    <router-outlet />
    <ind-course-item />
  `,

})
export class App {
  private readonly title = signal('Demo 01');
}
