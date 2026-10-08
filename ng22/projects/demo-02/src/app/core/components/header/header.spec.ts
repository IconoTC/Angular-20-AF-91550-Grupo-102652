import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Header } from './header';
import { provideRouter } from '@angular/router';

const TITLE = 'Curso';
const SUBTITLE = 'Subtítulo';

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;

    fixture.componentRef.setInput('app-title', TITLE);
    fixture.componentRef.setInput('subtitle', SUBTITLE);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Test de implementación
  // Test de caja blanca
  it('should have as title "Demo 01"', () => {
    expect(component['title']()).toContain(TITLE);
  });

  // Test de comportamiento
  // Test de caja negra
  it('should render title', async () => {
    const element = fixture.nativeElement as HTMLElement;
    const h1Element = element.querySelector('h1') as HTMLHeadingElement;
    expect(h1Element.textContent).toContain(TITLE);
  });

  it('should render subtitle', async () => {
    const element = fixture.nativeElement as HTMLElement;
    const pElement = element.querySelector('.first-line') as HTMLParagraphElement;
    expect(pElement.textContent).toContain(SUBTITLE);
  });
});
