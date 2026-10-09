import { ComponentFixture, TestBed } from '@angular/core/testing';
import LoginPage from './login-page';
import { provideRouter } from '@angular/router';
import { authRoutes } from '../router/auth.routes';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginPage],
      providers: [provideRouter(authRoutes)],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
