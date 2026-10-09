import { TestBed } from '@angular/core/testing';
import HomePage from './home-page';
import { RouterTestingHarness } from '@angular/router/testing';
import { DebugElement } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from '../../app.routes';
import { By } from '@angular/platform-browser';

describe('HomePage', () => {
  let harness: RouterTestingHarness;
  let debugHarness: DebugElement;
  let component: HomePage;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePage],
      providers: [provideRouter(routes)],
    }).compileComponents();

    harness = await RouterTestingHarness.create();
    debugHarness = harness.fixture.debugElement;
    await harness.fixture.whenStable();
    await harness.navigateByUrl('/home', HomePage);
    component = debugHarness.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render HomePage content', () => {
    const debugHeading = debugHarness.query(By.css('h2'));
    const elementHeading = debugHeading.nativeElement as HTMLElement;
    expect(elementHeading.textContent).toContain('Home');
  });
});
