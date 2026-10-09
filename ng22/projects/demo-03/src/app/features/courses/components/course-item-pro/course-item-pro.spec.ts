import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseItemPro } from './course-item-pro';
import { By } from '@angular/platform-browser';
import { COURSES } from '../../data/courses';

describe('CourseItemPro', () => {
  let component: CourseItemPro;
  let fixture: ComponentFixture<CourseItemPro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseItemPro],
    }).compileComponents();

    fixture = TestBed.createComponent(CourseItemPro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update UTILITY stat when clicking the buttons (using changeStats', async () => {
  const initialUtility = 5;
  component['course'].set({
    ...COURSES[0],
    courseStats: { ...COURSES[0].courseStats, utility: initialUtility },
  });
  await fixture.whenStable();

  const debugElement = fixture.debugElement;

  const debugUtilityOutput = debugElement.query(By.css('[aria-label="Utilidad"] output'));
  const utilityOutput = debugUtilityOutput?.nativeElement as HTMLOutputElement;
  const debugUtilityButtons = debugElement.queryAll(By.css('[aria-label="Utilidad"] button'));
  const utilityButtons = debugUtilityButtons.map(
    (btn) => btn?.nativeElement as HTMLButtonElement,
  );
  expect(utilityOutput.value).toBe(initialUtility.toString());

  // Click on the increment button
  // Ejemplo del uso del método click()
  utilityButtons[1].click();
  fixture.detectChanges();
  await fixture.whenStable();
  expect(utilityOutput.value).toBe((initialUtility + 1).toString());

  // Click on the decrement button
  // Ejemplo del uso de dispatchEvent para simular un click
  utilityButtons[0].dispatchEvent(new Event('click'));
  fixture.detectChanges();
  await fixture.whenStable();
  expect(utilityOutput?.value).toBe(initialUtility.toString());

  // Click on the reset button
  // Ejemplo del uso de triggerEventHandler para simular un click
  debugUtilityButtons[2].triggerEventHandler('click', null);
  fixture.detectChanges();
  await fixture.whenStable();
  expect(utilityOutput?.value).toBe('0');
});
});
