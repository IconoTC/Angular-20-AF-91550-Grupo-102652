import { Component, signal } from '@angular/core';
import { CourseItemPro } from './components/course-item-pro/course-item-pro';
import { CourseItem } from './components/course-item/course-item';

@Component({
  imports: [CourseItem, CourseItemPro],
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
  `,
})
export default class CoursesPage {
  private readonly title = signal('Courses');
}
