import { Component, inject, input } from '@angular/core';
import { Course } from '../../types/course';
import { StoreCourses } from '../../services/store-courses';

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
    .official {
      color: var(--color-primary);
    }
  `,
  template: `
    <h3 [class.official]="course().isOfficial">{{ course().title }}</h3>
    <p>{{ course().description }}</p>
    <label>
      <input type="checkbox" [checked]="course().isOfficial" 
      (change)="sendChange()"
      /> Oficial</label>
    <img [src]="course().image" [alt]="course().title" />
    <div>
      <button (click)="sendDelete()">Borrar</button>
      <button>Editar</button>
      <button>Detalles</button>
    </div>
  `
})
export class CourseItem {

  readonly #store = inject(StoreCourses);
  public readonly course = input.required<Course>();

  sendDelete() {
   this.#store.deleteCourse(this.course().id);
  }

  sendChange() {
    const course = { ...this.course(), isOfficial: !this.course().isOfficial };
    this.#store.updateCourse(course);
  }
}
