import { Component, DestroyRef, ElementRef, inject, signal, viewChild } from '@angular/core';
import { CourseForm } from '../course-form/course-form';
import { CourseItem } from '../course-item/course-item';
import { Course } from '../../types/course';
import { getCourseRx } from '../../data/courses';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { JsonPipe } from '@angular/common';

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
      <ind-course-form (eventAdd)="createCourse($event)" />
    </details>
    @if (isLoading()) {
      <p>Cargando cursos...</p>
    } @else if (error()) {
      <p>Error al cargar cursos: {{ error()?.message }}</p>
    } @else if (courses().length === 0) {
      <p>No hay cursos disponibles.</p>
    } @else {
      <section>
        @for (course of courses(); track course.id) {
          <ind-course-item
            [course]="course"
            (eventDelete)="deleteCourse($event)"
            (eventChange)="updateCourse($event)"
          />
        }
      </section>
    }

    <pre> {{ courses() | json }} </pre>
  `,
})
export class CourseList {
  readonly #destroyRef = inject(DestroyRef);
  readonly detailsAdd = viewChild<ElementRef<HTMLDetailsElement>>('detailsAdd')

  private readonly courses = signal<Course[]>([]);
  private readonly isLoading = signal(false);
  private readonly error = signal<Error | null>(null);

  constructor() {
    this.loadCourses();
  }

  loadCourses(): void {
    this.isLoading.set(true);
    this.error.set(null);

    // Simulate an API call to fetch courses
    getCourseRx()
      .pipe(takeUntilDestroyed(this.#destroyRef))
      .subscribe({
        next: (courses) => {
          this.courses.set(courses);
          this.isLoading.set(false);
        },
        error: (err) => {
          this.error.set(err);
          this.isLoading.set(false);
        },
      });
  }

  createCourse(course: Omit<Course, 'id'>): void {
    const newCourse: Course = {
      ...course,
      id: Math.floor(Math.random() * 1000), // Generate a random ID for the new course
    };
    this.courses.update((courses) => [...courses, newCourse]);

    (this.detailsAdd() as ElementRef<HTMLDetailsElement>).nativeElement.open = false; // Close the details element after adding a course
  }

  updateCourse(course: Course): void {
    this.courses.update((courses) => {
      return courses.map((c) => (c.id === course.id ? course : c));
    });
  }
  deleteCourse(id: Course['id']): void {
    this.courses.update((courses) => {
      return courses.filter((c) => c.id !== id);
    });
  }
}
