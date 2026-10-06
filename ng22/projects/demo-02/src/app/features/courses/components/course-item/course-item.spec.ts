import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseItem } from './course-item';
import { COURSES } from '../../data/courses';

describe('CourseItem', () => {
  let component: CourseItem;
  let fixture: ComponentFixture<CourseItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseItem],
    }).compileComponents();

    fixture = TestBed.createComponent(CourseItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


   it('should render initial title and message', () => {

    const element = fixture.nativeElement as HTMLElement;
    const h3Element = element.querySelector('h3');
    const pElement = element.querySelector('p');

    expect(h3Element?.textContent).toContain(COURSES[0].title);
    expect(pElement?.textContent).toContain(COURSES[0].description);
  });
});
