import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginFormSignals } from './login-form-signals';

describe('LoginFormSignals', () => {
  let component: LoginFormSignals;
  let fixture: ComponentFixture<LoginFormSignals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginFormSignals],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginFormSignals);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
