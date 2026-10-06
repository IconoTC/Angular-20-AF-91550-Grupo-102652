import { Component, signal, ViewEncapsulation } from '@angular/core';
import { COURSES } from '../../data/courses';
import { Course } from '../../types/course';

@Component({
  imports: [],
  selector: 'ind-course-item',
  styles: `
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      margin: 1rem;
      padding: 1rem;
      border: 1px solid var(--color-primary);
      border-radius: 4px;
      width: 300px;
    }
    h3 {
      margin: 0;
    }
    p {
      color: var(--color-secondary);
    }
    img {
      max-width: 100%;
      height: auto;
      border-radius: 5px;
    }
  `,
  template: `
    <h3>{{ course().title }}</h3>
    <p>{{ course().description }}</p>
    <img [src]="course().image" [alt]="course().title" />
  `,
  encapsulation: ViewEncapsulation.Emulated,
})
export class CourseItem {
  protected readonly course = signal<Course>(COURSES[0]);
}
