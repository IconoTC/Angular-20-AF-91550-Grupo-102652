import { Component, DestroyRef, ElementRef, inject, signal, viewChild } from '@angular/core';
import { CourseForm } from '../course-form/course-form';
import { CourseItem } from '../course-item/course-item';
import { Course } from '../../types/course';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { JsonPipe } from '@angular/common';
import { ApiRepoCourses } from '../../services/api-repo-courses';

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

  readonly #repo = inject(ApiRepoCourses);

  readonly detailsAdd = viewChild<ElementRef<HTMLDetailsElement>>('detailsAdd');

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
    this.#repo
      .getAll()
      .pipe(takeUntilDestroyed(this.#destroyRef))
      .subscribe({
        next: (courses) => {
          this.courses.set(courses);
          this.isLoading.set(false);
        },
        error: (err) => {
          console.log(err);
          this.error.set(err);
          this.isLoading.set(false);
        },
      });
  }

  createCourse(courseData: Omit<Course, 'id'>): void {
    // Asincrona
    this.#repo
      .add(courseData)
      .pipe(takeUntilDestroyed(this.#destroyRef))
      .subscribe({
        // Sincrona
        next: (newCourse) => {
          this.courses.update((courses) => [...courses, newCourse]);
          (this.detailsAdd() as ElementRef<HTMLDetailsElement>).nativeElement.open = false; // Close the details element after adding a course
        },
        error: (err) => {
          console.error('Error al crear el curso:', err);
        },
      });
  }

  updateCourse(course: Course): void {
    const { id, ...rest } = course;
    // Asincrona
    this.#repo
      .update(id, rest)
      .pipe(takeUntilDestroyed(this.#destroyRef))
      .subscribe({
        // Sincrona
        next: (updatedCourse) => {
          this.courses.update((courses) => {
            return courses.map((c) => (c.id === course.id ? updatedCourse : c));
          });
        },
        error: (err) => {
          console.error('Error al actualizar el curso:', err);
        },
      });
  }
  deleteCourse(id: Course['id']): void {
    // Asincrona

    this.#repo
      .delete(id)
      .pipe(takeUntilDestroyed(this.#destroyRef))
      .subscribe({
        // Sincrona
        next: () => {
          this.courses.update((courses) => {
            return courses.filter((c) => c.id !== id);
          });
        },
        error: (err) => {
          console.error('Error al eliminar el curso:', err);
        },
      });
  }
}
