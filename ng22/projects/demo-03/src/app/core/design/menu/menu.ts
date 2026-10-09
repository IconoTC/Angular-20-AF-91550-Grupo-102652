import { Component, input } from '@angular/core';

import { MenuOption } from '../../types/menu-option';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  imports: [RouterLink, RouterLinkActive],
  selector: 'ind-menu',
  styles: `
    nav {
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        gap: 1rem;
      }

      .vertical {
        flex-direction: column;
        a {
          font-size: 1.8rem;
        }
      }

      a {
        color: inherit;
        text-decoration: none;
        font-weight: bold;
      }
    }

    .active {
      display: inline-block;
      color: var(--color-primary-hot);
      border-bottom: 2px solid var(--color-primary-hot);
      transform: scale(1.1);
      transition: all 0.3s ease-in-out;
    }
  `,
  template: `
    <nav>
      <ul>
        <!-- <li *ngFor="let option of menuOptions()">
      <a [routerLink]="option.path">{{ option.label }}</a>
    </li> -->
        @for (option of options(); track option.label) {
          <li>
            <a [routerLink]="option.path" [routerLinkActive]="'active'">{{ option.label }}</a>
          </li>
        }
      </ul>
    </nav>
  `,
})
export class Menu {
  public readonly options = input.required<MenuOption[]>();
}
