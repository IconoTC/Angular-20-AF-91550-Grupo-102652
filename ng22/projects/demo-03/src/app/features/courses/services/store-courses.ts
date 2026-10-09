import { DestroyRef, inject, Service, signal } from '@angular/core';
import { Course } from '../types/course';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ApiRepoCourses } from './api-repo-courses';

@Service()
export class StoreCourses {
  readonly #destroyRef = inject(DestroyRef);
  readonly #repo = inject(ApiRepoCourses);

  readonly #courses = signal<Course[]>([]);
  readonly #isLoading = signal(false);
  readonly #error = signal<Error | null>(null);

  public readonly courses = this.#courses.asReadonly();
  public readonly isLoading = this.#isLoading.asReadonly();
  public readonly error = this.#error.asReadonly();

  loadCourses(): void {
    this.#isLoading.set(true);
    this.#error.set(null);

    // Simulate an API call to fetch courses
    this.#repo
      .getAll()
      .pipe(takeUntilDestroyed(this.#destroyRef))
      .subscribe({
        next: (courses) => {
          this.#courses.set(courses);
          this.#isLoading.set(false);
        },
        error: (err) => {
          console.log(err);
          this.#error.set(err);
          this.#isLoading.set(false);
        },
      });
  }

  createCourse(courseData: Omit<Course, 'id'>): void {
    // Asincrona;
    this.#repo
      .add(courseData)
      .pipe(takeUntilDestroyed(this.#destroyRef))
      .subscribe({
        // Sincrona
        next: (newCourse) => {
          this.#courses.update((courses) => [...courses, newCourse]);
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
          this.#courses.update((courses) => {
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
          this.#courses.update((courses) => {
            return courses.filter((c) => c.id !== id);
          });
        },
        error: (err) => {
          console.error('Error al eliminar el curso:', err);
        },
      });
  }
}
