import { TestBed } from '@angular/core/testing';
import { StoreCourses } from './store-courses';

describe('StoreCourses', () => {
  let service: StoreCourses;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreCourses);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
