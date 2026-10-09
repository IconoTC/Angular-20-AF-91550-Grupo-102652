import { Component, signal } from '@angular/core';

import { Timestamp } from '../../core/design/timestamp/timestamp';
import { CourseList } from './components/course-list/course-list';

@Component({
  imports: [CourseList, Timestamp],
  selector: 'ind-courses-page',
  styleUrls: ['../pages.css'],
  styles: `
    :host {
      display: block;
      width: 90vw;
    }
  `,
  template: `
    <h2>{{ title() }}</h2>
    <ind-course-list />
    <ind-timestamp />
  `,
})
export default class CoursesPage {
  private readonly title = signal('Courses');
}
