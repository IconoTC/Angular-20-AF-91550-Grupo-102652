import { Component, computed, signal } from '@angular/core';
import { Course, CourseStats } from '../../types/course';
import { COURSES } from '../../data/courses';

const STAT_LIMIT = 10;

@Component({
  imports: [],
  selector: 'ind-course-item-pro',
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
    img {
      max-width: 100%;
      height: auto;
      border-radius: 5px;
    }
    .details {
      text-align: center;
    }

    .course-title {
      font-weight: bolder;
      font-size: 1.4rem;
      margin-block: 0.5rem;
      text-align: center;
    }

    .course-stats {
      display: flex;
      gap: 1rem;
      justify-content: space-between;
      align-items: center;

      .course-courseStats-buttons {
        display: flex;
        gap: 0.5rem;
      }
    }

    .average {
      margin-block-start: 0.5rem;
      padding-block-start: 0.5rem;
      border-top: 1px solid var(--color-primary);
    }

    /* clase de aplicación opcional */
    .course-advanced {
      background-color: var(--color-primary);
      color: var(--color-background);
    }
  `,
  template: `
    <header>
      <img [src]="course().image" [alt]="course().title" [title]="'ID: ' + course().id" />
      <h3>{{ course().title }}</h3>
    </header>
    <section class="details">
      <p>{{ course().description }}</p>
      <p>Duración: {{ course().duration }}</p>
      <p>Nivel: {{ course().level }}</p>
    </section>
    <section class="stats">
      <div class="course-stats" aria-label="Utilidad">
        <span
          >Utilidad: <output>{{ course().courseStats.utility }}</output></span
        >
        <div class="course-courseStats-buttons">
          <button
            (click)="changeStats('utility', -1)"
            [disabled]="course().courseStats.utility <= 0"
          >
            ➖
          </button>
          <button
            (click)="changeStats('utility', +1)"
            [disabled]="course().courseStats.utility >= statLimit"
          >
            ➕
          </button>
          <button
            [title]="'Reset ' + 'utilidad' + ' a 0'"
            (click)="changeStats('utility')"
            [disabled]="course().courseStats.utility <= 0"
          >
            🔄️
          </button>
        </div>
      </div>
      <div class="course-stats" aria-label="Dificultad">
        <span
          >Dificultad: <output>{{ course().courseStats.difficulty }}</output></span
        >
        <div class="course-courseStats-buttons">
          <button
            (click)="changeStats('difficulty', -1)"
            [disabled]="course().courseStats.difficulty <= 0"
          >
            ➖
          </button>
          <button
            (click)="changeStats('difficulty', +1)"
            [disabled]="course().courseStats.difficulty >= statLimit"
          >
            ➕
          </button>
          <button
            [title]="'Reset ' + 'difficulty' + ' a 0'"
            (click)="changeStats('difficulty')"
            [disabled]="course().courseStats.difficulty <= 0"
          >
            🔄
          </button>
        </div>
      </div>
      <div class="course-stats" aria-label="Actualidad">
        <span
          >Actualidad: <output>{{ course().courseStats.actualization }}</output></span
        >
        <div class="course-courseStats-buttons">
          <button
            (click)="changeStats('actualization', -1)"
            [disabled]="course().courseStats.actualization <= 0"
          >
            ➖
          </button>
          <button
            (click)="changeStats('actualization', +1)"
            [disabled]="course().courseStats.actualization >= statLimit"
          >
            ➕
          </button>
          <button
            [title]="'Reset ' + 'actualidad' + ' a 0'"
            (click)="changeStats('actualization')"
            [disabled]="course().courseStats.actualization <= 0"
          >
            🔄
          </button>
        </div>
      </div>
      <div class="average">
        <span
          >Promedio: <output>{{ average() }}</output></span
        >
      </div>
    </section>
    <section class="actions"></section>
  `,
})
export class CourseItemPro {
  protected readonly statLimit = STAT_LIMIT;
  protected readonly course = signal<Course>(COURSES[0]);
  protected readonly average = computed(() => {
    const stats = this.course().courseStats;
    const total = stats.utility + stats.difficulty + stats.actualization;
    return (total / 3).toFixed(2);
  });

  changeStats(stat: keyof CourseStats, delta = 0): void {
    if (delta === 0) {
      this.course.update((course) => {
        return {
          ...course,
          courseStats: {
            ...course.courseStats,
            [stat]: 0,
          },
        };
      });
    } else {
      this.course.update((course) => {
        return {
          ...course,
          courseStats: {
            ...course.courseStats,
            [stat]: course.courseStats[stat] + delta,
          },
        };
      });
    }

    // Error porque muta el objeto courseStats,
    // lo que rompe la reactividad de signals.

    // this.course.update((course) => {
    //   course.courseStats[stat] += delta;
    //   return course;
    // });
    // }

  }
}
