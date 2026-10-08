import { Component, inject, signal } from '@angular/core';
import { LoginRequest } from '../../types/auth';
import {
  email,
  form,
  FormField,
  minLength,
  PathKind,
  required,
  SchemaPathTree,
  FormRoot,
} from '@angular/forms/signals';
import { JsonPipe } from '@angular/common';
import { Router } from '@angular/router';
import { Auth } from '../../services/auth';

type LoginModel = LoginRequest;

@Component({
  imports: [FormField, JsonPipe, FormRoot],
  selector: 'ind-login-form-signals',
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
    <form [formRoot]="loginFieldTree">
      <label for="email" class="form-control">
        <span>Email:</span>
        <input type="email" id="email" [formField]="loginFieldTree.email" />
      </label>

      @let email = loginFieldTree.email();
      @if (email.invalid() && email.touched()) {
        <span class="error">{{ email.errors()[0]?.message }}</span>
      }

      <label for="password" class="form-control">
        <span>Password:</span>
        <input type="password" id="password" [formField]="loginFieldTree.password" />
      </label>

      @let password = loginFieldTree.password();
      @if (password.invalid() && password.touched()) {
        <span class="error">{{ password.errors()[0]?.message }}</span>
      }

      <label for="remember" class="form-control checkbox">
        <input type="checkbox" id="remember" [formField]="loginFieldTree.rememberMe" />
        <span>Remember me</span>
      </label>

      <button type="submit" [disabled]="loginFieldTree().invalid()">Login</button>
    </form>

    @if (error()) {
      <div class="login-error">
        <p>{{ error() }}</p>
      </div>
    }

    <pre>{{ loginFieldTree().value() | json }}</pre>
  `,
})
export class LoginFormSignals {
  readonly #auth = inject(Auth);
  readonly #router = inject(Router);

  private readonly error = signal<string | null>(null);

  readonly #initialState: LoginModel = {
    email: '',
    password: '',
    rememberMe: false,
  };

  readonly #loginModel = signal<LoginModel>(this.#initialState);

  //

  readonly #schema = (path: SchemaPathTree<LoginRequest, PathKind.Root>) => {
    required(path.email, {
      message: 'El correo electrónico es obligatorio.',
    });
    email(path.email, {
      message: 'Por favor, introduce una dirección de correo electrónico válida.',
    });
    required(path.password, {
      message: 'La contraseña es obligatoria.',
    });
    minLength(path.password, 5, {
      message: 'La contraseña debe tener al menos 5 caracteres.',
    });
  };

  readonly loginFieldTree = form(this.#loginModel, this.#schema, {
    submission: {
      action: this.login.bind(this),
    },
  });

  async login() {
    try {
      const response = await this.#auth.loginPromise(this.#loginModel());
      console.log('LoginFormTdf.login response', response);
      if (response.token) {
        this.#router.navigate(['/home']);
      } else {
        this.error.set('Credenciales incorrectas: ' + response.error);
        // mostrar error
      }
      this.loginFieldTree().reset(this.#initialState);
    } catch (error) {
      if (error instanceof Error) {
        this.error.set('Error en la petición: ' + error.message);
      } else {
        this.error.set('Error en la petición' + error);
      }
    }
  }
}
