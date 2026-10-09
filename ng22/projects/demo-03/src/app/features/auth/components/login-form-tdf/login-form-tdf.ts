import { JsonPipe } from '@angular/common';
import { Component, DestroyRef, inject, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { LoginRequest } from '../../types/auth';
import { Auth } from '../../services/auth';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';

@Component({
  imports: [FormsModule, JsonPipe],
  selector: 'ind-login-form-tdf',
  styles: `
    form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      width: 80vw;
      max-width: 400px;

      .form-control {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        &.checkbox {
          flex-direction: row;
          align-items: center;
        }
      }
    }

    input,
    textarea {
      padding: 0.5rem;
      font-size: 1rem;
      color: var(--color-primary-hot);
      background-color: var(--color-background-primary);
      border: none;
      border-block-end: 2px solid var(--color-primary);
      border-radius: 4px;

      &:focus-visible {
        outline: var(--color-primary) auto 1px;
        background-color: var(--color-background);
      }
    }

    button {
      padding: 0.5rem 1rem;
      font-size: 1rem;
      color: var(--color-background);
      background-color: var(--color-primary);
      border: none;
      border-radius: 4px;
      cursor: pointer;

      &:disabled {
        background-color: color-mix(in srgb, var(--color-primary) 30%, transparent);
        cursor: not-allowed;
      }
    }

    .error {
      color: var(--color-tertiary);
      font-size: 0.8rem;
    }
    .login-error {
      color: var(--color-tertiary);
      margin-block-start: 0.5rem;
    }
  `,
  template: `
    <form #loginForm="ngForm" (ngSubmit)="login(loginForm)">
      <label for="email" class="form-control">
        <span>Email:</span>
        <input type="email" id="email" name="email" ngModel required email />
      </label>

      @if (loginForm.controls['email']?.invalid && loginForm.controls['email']?.touched) {
        <div class="error">
          @if (loginForm.controls['email']?.hasError('required')) {
            <p>El correo electrónico es obligatorio.</p>
          }
          @if (loginForm.controls['email']?.hasError('email')) {
            <p>Por favor, introduce una dirección de correo electrónico válida.</p>
          }
        </div>
      }

      <label for="password" class="form-control">
        <span>Password:</span>
        <input type="password" id="password" name="password" ngModel required minlength="5" />
      </label>

      @if (loginForm.controls['password']?.invalid && loginForm.controls['password']?.touched) {
        <div class="error">
          @if (loginForm.controls['password']?.hasError('required')) {
            <p>La contraseña es obligatoria.</p>
          }
          @if (loginForm.controls['password']?.hasError('minlength')) {
            <p>La contraseña debe tener al menos 5 caracteres.</p>
          }
        </div>
      }

      <label for="remember" class="form-control checkbox">
        <input type="checkbox" id="remember" name="rememberMe" [ngModel]="false" />
        <span>Remember me</span>
      </label>

      <button type="submit" [disabled]="loginForm.invalid">Login</button>
    </form>

    @if (error()) {
      <div class="login-error">
        <p>{{ error() }}</p>
      </div>
    }

    <pre>{{ loginForm.value | json }}</pre>
  `,
})
export class LoginFormTdf {
  // readonly loginForm = viewChild<NgForm>('loginForm');

  // constructor() {
  //   effect(() => {
  //     console.log(this.loginForm());
  //   });
  // }

  readonly #auth = inject(Auth);
  readonly #destroyRef = inject(DestroyRef);
  readonly #router = inject(Router);

  private readonly error = signal<string | null>(null);

  readonly #initialData: LoginRequest = {
    email: '',
    password: '',
    rememberMe: false,
  };

  login(form: NgForm) {
    console.log('LoginFormTdf.login', form);

    if(form.invalid) {
      console.log('Invalid form')
      return
    }

    this.#auth
      .login(form.value)
      .pipe(takeUntilDestroyed(this.#destroyRef))
      .subscribe({
        next: (response) => {
          console.log('LoginFormTdf.login response', response);
          if (response.token) {
            this.#router.navigate(['/home']);
          } else {
            this.error.set('Credenciales incorrectas: ' + response.error);
            // mostrar error
          }
        },
        error: (error) => {
          if (error instanceof Error) {
            this.error.set('Error en la petición: ' + error.message);
          } else {
            this.error.set('Error en la petición' + error);
          }
        },
        complete: () => {
          form.resetForm(this.#initialData);
        },
      });
  }
}
