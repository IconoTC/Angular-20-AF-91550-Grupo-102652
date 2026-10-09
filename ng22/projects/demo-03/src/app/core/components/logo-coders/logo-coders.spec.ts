import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogoCoders } from './logo-coders';
import { By } from '@angular/platform-browser';

describe('LogoCoders', () => {
  let component: LogoCoders;
  let fixture: ComponentFixture<LogoCoders>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoCoders],
    }).compileComponents();

    fixture = TestBed.createComponent(LogoCoders);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Test de funcionalidad
// Más adecuado, especialmente en este caso
it('should run console.log when user clicks on the logo', () => {
  vi.spyOn(console, 'log').mockImplementation( () => undefined );
  const debugPathElements = fixture.debugElement.queryAll(By.css('path'));

  debugPathElements[0].triggerEventHandler('click', null);
  expect(console.log).toHaveBeenLastCalledWith('Logo clicked', 'upper');

  debugPathElements[1].triggerEventHandler('click', null);
  expect(console.log).toHaveBeenLastCalledWith('Logo clicked', 'down');
});
});
