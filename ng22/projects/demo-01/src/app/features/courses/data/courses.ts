import { Course } from '../types/course';

export const courses: Course[] = [
  {
    id: 1,
    title: 'Angular Fundamentals',
    description: 'Learn the basics of Angular',
    duration: '4 hours',
    level: 'beginner',
    image: 'angular-fundamentals.jpg',
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
    image: 'advanced-angular.jpg',
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
    image: 'angular-performance.jpg',
    courseStats: {
      difficulty: 4,
      actualization: 5,
      utility: 5,
    },
  }
];
