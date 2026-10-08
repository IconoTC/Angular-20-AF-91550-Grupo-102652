import { ComponentFixture, TestBed } from '@angular/core/testing';
import RegisterPage from './register-page';
import { provideRouter } from '@angular/router';
import { authRoutes } from '../router/auth.routes';

describe('RegisterPage', () => {
  let component: RegisterPage;
  let fixture: ComponentFixture<RegisterPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterPage],
      providers: [provideRouter(authRoutes)],
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
