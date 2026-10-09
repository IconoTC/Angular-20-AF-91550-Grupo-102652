import { TestBed } from '@angular/core/testing';
import { ApiRepoCourses } from './api-repo-courses';

describe('ApiRepoCourses', () => {
  let service: ApiRepoCourses;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiRepoCourses);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
