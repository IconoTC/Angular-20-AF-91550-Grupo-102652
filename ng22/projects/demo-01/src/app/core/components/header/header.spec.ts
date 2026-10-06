import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Header } from './header';

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header],
    }).compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  // Test de implementación
  // Test de caja blanca
  it('should have as title "Demo 01"', () => {
    expect(component['title']()).toContain('Angular');
  });


  // Test de comportamiento
  // Test de caja negra
  it('should render title', async () => {
    const element = fixture.nativeElement as HTMLElement;
    const h1Element = element.querySelector('h1') as HTMLHeadingElement;
    expect(h1Element.textContent).toContain('Angular');
  });
});
