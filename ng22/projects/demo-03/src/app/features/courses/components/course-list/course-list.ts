import { Component, ElementRef, inject, viewChild } from '@angular/core';
import { CourseForm } from '../course-form/course-form';
import { CourseItem } from '../course-item/course-item';
import { JsonPipe } from '@angular/common';
import { StoreCourses } from '../../services/store-courses';

@Component({
  imports: [CourseForm, CourseItem, JsonPipe],
  selector: 'ind-course-list',
  styles: `
    section {
      display: flex;
    }
  `,
  template: `
    <details #detailsAdd>
      <summary>Añadir curso</summary>
      <ind-course-form (eventAdd)="closeAddDetail()" />
    </details>
    @if (store.isLoading()) {
      <p>Cargando cursos...</p>
    } @else if (store.error()) {
      <p>Error al cargar cursos: {{ store.error()?.message }}</p>
    } @else if (store.courses().length === 0) {
      <p>No hay cursos disponibles.</p>
    } @else {
      <section>
        @for (course of store.courses(); track course.id) {
          <ind-course-item [course]="course" />
        }
      </section>
    }

    <pre> {{ store.courses() | json }} </pre>
  `,
})
export class CourseList {
  readonly store = inject(StoreCourses);

  readonly detailsAdd = viewChild<ElementRef<HTMLDetailsElement>>('detailsAdd');

  closeAddDetail(): void {
    (this.detailsAdd() as ElementRef<HTMLDetailsElement>).nativeElement.open = false; // Close the details element after adding a course
  }
}
