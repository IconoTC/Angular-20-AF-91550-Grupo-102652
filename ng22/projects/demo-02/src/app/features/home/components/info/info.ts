import { Component, signal } from '@angular/core';
import { Timestamp } from '../../../../core/design/timestamp/timestamp';
import { TimeService } from '../../../../core/service/time.service';

@Component({
  imports: [Timestamp],
  providers: [
    TimeService,
    // {
    //   provide: TimeService,
    //   useClass: TimeService
    // }

    // {
    //   provide: TimeService,
    //   useFactory: () => {
    //     const timeService = new TimeService();
    //     console.log('TimeService instance created:', timeService);
    //     return timeService;
    //   }
    // }

    // {
    //   provide: TimeService,
    //   useValue: {
    //     getTime: () => 7777777777777
    //   }
    // }

  ],
  selector: 'ind-info',
  styles: `
    ul {
      list-style-type: none;
      padding: 0;
    }

    p {
      max-width: 23rem;
    }

    footer {
      font-size: 0.9em;
      background-color: var(--color-background-primary);
      color: var(--color-primary-hot);
      border-top: 2px solid var(--color-primary);
      border-radius: 0.5rem;
      margin-top: 1rem;

      display: flex;
      justify-content: center;
      align-items: center;
    }
  `,
  template: `
    <h3>Información del proyecto</h3>
    <p>Este proyecto es un ejemplo de uso de Angular 22 y sus nuevas características.</p>
    <ul>
      @for (item of technologies(); track item) {
        <li>{{ item }}</li>
      }
    </ul>
    <footer>
      <ul>
        <li>Autor: {{ author() }}</li>
        <li>Fecha: {{ currentDate() }}</li>
      </ul>
    </footer>
    <ind-timestamp />
    
  `,
})
export class Info {
  private readonly author = signal('Alejandro Cerezo');
  private readonly currentDate = signal(new Date().toLocaleDateString());
  private readonly technologies = signal(['Angular 22', 'TypeScript 6.0', 'ES2026']);
}
