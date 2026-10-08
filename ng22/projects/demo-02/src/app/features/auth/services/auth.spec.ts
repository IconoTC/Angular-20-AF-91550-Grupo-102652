import { TestBed } from '@angular/core/testing';
import { Auth } from './auth';

describe('Auth', () => {
  let service: Auth;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Auth);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should login successfully using promises', async () => {
    const request = { email: 'user@example.com', password: 'password', rememberMe: false };
    const response = await service.loginPromise(request, { delayTime: 1 });
    expect(response).toEqual({
      error: 'fgfgffg',
      token: expect.any(String),
      info: {
        id: expect.any(Number),
        email: request.email,
        loginDate: expect.any(Date),
        rememberMe: request.rememberMe,
      },
    });
  });

  it('should login successfully using observables', () => {
    const request = { email: 'user@example.com', password: 'password', rememberMe: false };
    service.login(request, { delayTime: 1 }).subscribe((response) => {
      expect(response).toEqual({
        error: '',
        token: expect.any(String),
        info: {
          id: expect.any(Number),
          email: request.email,
          loginDate: expect.any(Date),
          rememberMe: request.rememberMe,
        },
      });
    });
  });

  it('should login NOT successfully using observables', () => {
    const request = { email: 'user@example.com', password: 'wrongpassword', rememberMe: false };
    service.login(request, { delayTime: 1, success: false }).subscribe((response) => {
      expect(response).toEqual({
        error: 'Invalid email or password',
        token: '',
      });
    });
  });
});
