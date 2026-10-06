import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CourseItem } from '../../../features/courses/components/course-item/course-item';
import { CourseItemPro } from '../../../features/courses/components/course-item-pro/course-item-pro';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { LogoCoders } from '../logo-coders/logo-coders';
import { Card } from '../../design/card/card';
import { Menu } from '../../design/menu/menu';

@Component({
  imports: [
    RouterOutlet,
    CourseItem,
    CourseItemPro,
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
    <ind-header>
      <ind-logo-coders slot="logo" />
      <ind-menu slot="menu" />
    </ind-header>

    <main class="container">
      <router-outlet />
      <ind-card>
        <ind-course-item />
      </ind-card>
      <details>
        <summary>Course Detaisl</summary>
        <ind-course-item-pro />
      </details>
    </main>

    <ind-footer />
  `,
})
export class App {
  // private readonly title = signal('Demo 01');
}
