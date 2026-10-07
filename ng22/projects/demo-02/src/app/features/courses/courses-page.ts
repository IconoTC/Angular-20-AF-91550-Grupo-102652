import { Component, signal } from '@angular/core';
import { CourseItemPro } from './components/course-item-pro/course-item-pro';
import { CourseItem } from './components/course-item/course-item';
import { Timestamp } from '../../core/design/timestamp/timestamp';

@Component({
  imports: [CourseItem, CourseItemPro, Timestamp],
  selector: 'ind-courses-page',
  styleUrls: ['../pages.css'],
  styles: ``,
  template: `
    <h2>{{ title() }}</h2>
    <ind-course-item />
    <details>
      <summary>Course Detaisl</summary>
      <ind-course-item-pro />
    </details>
    <ind-timestamp />
  `,
})
export default class CoursesPage {
  private readonly title = signal('Courses');
}
