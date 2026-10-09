import { JsonPipe } from '@angular/common';
import { Component, DestroyRef, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginRequest } from '../../types/auth';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { Auth } from '../../services/auth';

@Component({
  imports: [ReactiveFormsModule, JsonPipe],
  selector: 'ind-login-form-mdf-rx',
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
    <form [formGroup]="loginForm" (ngSubmit)="login()">
      <label for="email" class="form-control">
        <span>Email:</span>
        <input type="email" id="email" formControlName="email" />
      </label>

      @let email = loginForm.get('email');
      @if (email?.invalid && email?.touched) {
        <div class="error">
          @if (email?.hasError('required')) {
            <p>El correo electrónico es obligatorio.</p>
          }
          @if (email?.hasError('email')) {
            <p>Por favor, introduce una dirección de correo electrónico válida.</p>
          }
        </div>
      }

      <label for="password" class="form-control">
        <span>Password:</span>
        <input type="password" id="password" formControlName="password" />
      </label>

      @let password = loginForm.get('password');
      @if (password?.invalid && password?.touched) {
        <div class="error">
          @if (password?.hasError('required')) {
            <p>La contraseña es obligatoria.</p>
          }
          @if (password?.hasError('minlength')) {
            <p>La contraseña debe tener al menos 5 caracteres.</p>
          }
        </div>
      }

      <label for="remember" class="form-control checkbox">
        <input type="checkbox" id="remember" formControlName="rememberMe" />
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
export class LoginFormMdfRx {
  readonly #fb = inject(FormBuilder);
  readonly #auth = inject(Auth);
  readonly #destroyRef = inject(DestroyRef);
  readonly #router = inject(Router);

  // private readonly loginForm: FormGroup = new FormGroup({
  //   email: new FormControl('', []),
  //   password: new FormControl('', []),
  //   remember: new FormControl(false),
  // });

  private readonly error = signal<string | null>(null);

  readonly #initialData: LoginRequest = {
    email: '',
    password: '',
    rememberMe: false,
  };

  private readonly loginForm: FormGroup = this.#fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(5)]],
    rememberMe: [false],
  });

  login() {
    if (this.loginForm.invalid) {
      console.log('Invalid form');
      return;
    }

    this.#auth
      .login(this.loginForm.value)
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
          this.loginForm.reset(this.#initialData);
        },
      });
  }
}
