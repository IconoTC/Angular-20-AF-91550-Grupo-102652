import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { LogoCoders } from '../logo-coders/logo-coders';
import { Card } from '../../design/card/card';
import { Menu } from '../../design/menu/menu';
import HomePage from '../../../features/home/home-page';
import AboutPage from '../../../features/about/about-page';
import CoursesPage from '../../../features/courses/courses-page';
import DashboardPage from '../../../features/dashboard/dashboard-page';
import { MENU_OPTIONS } from '../../../app.routes';

@Component({
  imports: [
    RouterOutlet,
    LogoCoders,
    Header,
    Footer,
    Menu,
    Card,
    HomePage,
    DashboardPage,
    CoursesPage,
    AboutPage,
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
      <router-outlet />
      <ind-card id="home">
        <ind-home-page />
      </ind-card>

      <ind-card id="dashboard">
        <ind-dashboard-page />
      </ind-card>

      <ind-card id="courses">
        <ind-courses-page />
      </ind-card>

      <ind-card id="about">
        <ind-about-page />
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
