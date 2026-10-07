import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { LogoCoders } from '../logo-coders/logo-coders';
import { Card } from '../../design/card/card';
import { Menu } from '../../design/menu/menu';
import { MENU_OPTIONS } from '../../../app.routes';

@Component({
  imports: [
    RouterOutlet,
    LogoCoders,
    Header,
    Footer,
    Menu,
    Card,
  ],
  selector: 'ind-root',
  styles: `
    :host {
      display: grid;
      grid-template-rows: auto 1fr auto;
      min-height: 100vh;
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
    }
    main.container {
      padding: 1rem 2rem;
      width: 100%;
      min-height: 90%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 1rem;
      position: relative;
    }
  `,
  template: `
    <ind-header [app-title]="title()" [subtitle]="subtitle()">
      <ind-logo-coders slot="logo" title="LogoCoders" />
      <ind-menu slot="menu" [options]="menuOptions()" />
    </ind-header>

    <main class="container">
      <ind-card>
        <router-outlet />
        <!-- Aquí se mostrará el contenido 
         de la página seleccionada en el menú. -->
      </ind-card>
    </main>

    <ind-footer />
  `,
})
export class App {
  private readonly title = signal('Curso de Angular 22');
  private readonly subtitle = signal('Demo 02: aplicaciones con Angular');

  private readonly menuOptions = signal(MENU_OPTIONS);
}
