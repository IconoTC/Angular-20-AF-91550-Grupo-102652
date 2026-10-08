import { Service } from '@angular/core';
import { LoginRequest, LoginResponse } from '../types/auth';
import { delay, firstValueFrom, Observable, of } from 'rxjs';

interface AuthOptions {
  success?: boolean;
  delayTime?: number;
}

const DEFAULT_AUTH_OPTIONS: AuthOptions = {
  success: true,
  delayTime: 1000,
};

@Service()
export class Auth {

  #generateToken(): string {
    // Generamos un token aleatorio simulado
    // (en un caso real, esto lo haría el backend)
    return Math.random().toString(36).substring(2);
  }

  #generateId(): number {
    // Generamos un id aleatorio simulado
    // (en un caso real, esto lo haría el backend)
    return Math.floor(Math.random() * 1_000);
  }

  login(request: LoginRequest, options?: AuthOptions): Observable<LoginResponse> {

    const authOptions = { ...DEFAULT_AUTH_OPTIONS, ...options };
    const response: LoginResponse = authOptions.success
      ? {
          error: '',
          token: this.#generateToken(),
          info: {
            id: this.#generateId(),
            email: request.email,
            loginDate: new Date(),
            rememberMe: request.rememberMe,
          },
        }
      : {
          error: 'Invalid email or password',
          token: '',
        };

    return of(response).pipe(
      delay(authOptions.delayTime as number)
    );

  }

  loginPromise(request: LoginRequest, options?: AuthOptions): Promise<LoginResponse> { 
    return firstValueFrom(this.login(request, options));
  }
}
