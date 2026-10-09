import { Component, output } from '@angular/core';
import { Course } from '../../types/course';

@Component({
  imports: [],
  selector: 'ind-course-form',
  styles: ``,
  template: `
    <p>Aquí ira el formulario!</p>
    <p>.....</p>
    <p>.....</p>
    <p>.....</p>
    <p>.....</p>
    <p>.....</p>

    <button (click)="sendAdd()">Añadir curso</button>
  `,
})
export class CourseForm {
  #initialCourse: Omit<Course, 'id'> = {
    title: 'Docker',
    description: 'Descripción del curso',
    image: 'https://via.placeholder.com/150',
    isOfficial: false,
    duration: '5h',
    level: 'beginner',
    courseStats: {
      actualization: 5,
      difficulty: 3,
      utility: 4,
    },
  };

  public readonly eventAdd = output<Omit<Course, 'id'>>();

  sendAdd() {
    this.eventAdd.emit(this.#initialCourse);
  }
}
