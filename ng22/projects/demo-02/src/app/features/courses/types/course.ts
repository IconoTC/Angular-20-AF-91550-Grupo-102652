export interface Course {
  id: number;
  title: string;
  description: string;
  duration: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  image: string;
  courseStats: CourseStats;
}

export interface CourseStats {
  difficulty: number;
  actualization: number;
  utility: number;
}
