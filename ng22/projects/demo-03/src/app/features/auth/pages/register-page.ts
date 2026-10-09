import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Card } from '../../../core/design/card/card';

@Component({
  imports: [RouterLink, Card],
  selector: 'ind-register-page',
  styles: ``,
  template: `
    <ind-card>
      <p>Aquí ira el formulario de registro</p>
    </ind-card>
    <p>Si ya tienes cuenta, <a [routerLink]="['/auth', 'login']">inicia sesión aquí</a>.</p>
  `,
})
export default class RegisterPage {}
