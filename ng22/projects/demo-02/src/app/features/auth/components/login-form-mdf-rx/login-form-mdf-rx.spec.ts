import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginFormMdfRx } from './login-form-mdf-rx';

describe('LoginFormMdfRx', () => {
  let component: LoginFormMdfRx;
  let fixture: ComponentFixture<LoginFormMdfRx>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginFormMdfRx],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginFormMdfRx);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
