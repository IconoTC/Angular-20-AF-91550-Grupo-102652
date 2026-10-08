import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginFormTdf } from './login-form-tdf';

describe('LoginFormTdf', () => {
  let component: LoginFormTdf;
  let fixture: ComponentFixture<LoginFormTdf>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginFormTdf],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginFormTdf);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
