import { ComponentFixture, TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  let component: App;
  let fixture: ComponentFixture<App>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();

    fixture = TestBed.createComponent(App);
    component = fixture.componentInstance;
    // fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  // Test de implementación
  // Test de caja blanca
  it('should have as title "Demo 01"', () => {
    expect(component['title']()).toEqual('Demo 01');
  });


  // Test de comportamiento
  // Test de caja negra
  it('should render title', async () => {
    const element = fixture.nativeElement as HTMLElement;
    const h1Element = element.querySelector('h1') as HTMLHeadingElement;
    expect(h1Element.textContent).toContain('Demo 01');
  });
});
