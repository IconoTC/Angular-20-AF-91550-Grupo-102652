import { Component, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Card } from '../../../core/design/card/card';
import { MenuOption } from '../../../core/types/menu-option';
import { Menu } from '../../../core/design/menu/menu';
import { LoginFormTdf } from '../components/login-form-tdf/login-form-tdf';
import { LoginFormMdfRx } from '../components/login-form-mdf-rx/login-form-mdf-rx';
import { LoginFormSignals } from '../components/login-form-signals/login-form-signals';

type FormType = 'td' | 'md-rx' | 'signals';

const MENU_OPTIONS: MenuOption[] = [
  { label: 'Formulario TD', path: '../td' },
  { label: 'Formulario MD-RX', path: '../md-rx' },
  { label: 'Formulario Signals', path: '../signals' },
];

@Component({
  imports: [RouterLink, Card, Menu, LoginFormTdf, LoginFormMdfRx, LoginFormSignals],
  selector: 'ind-login-page',
  styles: ``,
  template: `
    <ind-menu [options]="menuOptions()" />
    <ind-card>
      @if (formType() === 'td') {
        <ind-login-form-tdf />
      } @else if (formType() === 'md-rx') {
        <ind-login-form-mdf-rx />
      } @else if (formType() === 'signals') {
        <ind-login-form-signals />
      }
    </ind-card>
    <p>Si no tienes cuenta, <a [routerLink]="['/auth', 'register']">regístrate aquí</a>.</p>
  `,
})
export default class LoginPage {
  public readonly formType = input<FormType>();
  private readonly menuOptions = signal(MENU_OPTIONS);
}
