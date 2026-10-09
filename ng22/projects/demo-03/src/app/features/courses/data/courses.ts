import { Observable, of, delay } from 'rxjs';
import { Course } from '../types/course';

export const COURSES: Course[] = [
  {
    id: 1,
    title: 'Angular Fundamentals',
    description: 'Learn the basics of Angular',
    duration: '4 hours',
    level: 'beginner',
    image: 'assets/angular-fundamentals.webp',
    isOfficial: true,
    courseStats: {
      difficulty: 3,
      actualization: 5,
      utility: 5,
    },
  },
  {
    id: 2,
    title: 'Advanced Angular',
    description: 'Dive deep into Angular',
    duration: '6 hours',
    level: 'advanced',
    image: 'assets/angular-advanced.webp',
    isOfficial: false,
    courseStats: {
      difficulty: 5,
      actualization: 5,
      utility: 5,
    },
  },
  {
    id: 3,
    title: 'Angular Performance',
    description: 'Optimize your Angular applications',
    duration: '5 hours',
    level: 'intermediate',
    image: 'assets/angular-performance.webp',
    isOfficial: true,
    courseStats: {
      difficulty: 4,
      actualization: 5,
      utility: 5,
    },
  },
];

export const getCourses = (): Promise<Course[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(COURSES);
    }, 1000);
  });
};

export const getCourseRx = (): Observable<Course[]> => {
  return of(COURSES).pipe(delay(1000));
}