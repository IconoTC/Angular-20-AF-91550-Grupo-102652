import { Component, signal, ViewEncapsulation } from '@angular/core';
import { COURSES } from '../../data/courses';
import { Course } from '../../types/course';

@Component({
  imports: [],
  selector: 'ind-course-item-signals',
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
    <p class="plain-text">{{ plainText }}</p>
  `,
  encapsulation: ViewEncapsulation.Emulated,
})
export class CourseItemSignals {
  protected readonly course = signal<Course>(COURSES[0]);


  // Incorrecto por no usar signals
  protected plainText = 'Esto es un texto plano';

  constructor() {
    //console.log(this.course());
    //this.course.set(COURSES[1]);
    this.course.update((course) => ({ ...course, title: 'Updated Course Title' }));
    console.log(this.plainText);

    setTimeout(
      () => {
        this.plainText = 'Esto es un texto plano modificado';
        console.log(this.plainText);
      },
      2000,
    );

    setTimeout(
      () => {
        this.course.set(COURSES[1]);
        console.log(this.course());
      },
      4000,
    );
  }
}
