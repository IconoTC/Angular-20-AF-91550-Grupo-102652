import { ApplicationConfig, LOCALE_ID, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';
import { ERROR_LEVEL } from './core/services/logger';
import { environment } from '../environments/environment';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeEs, 'es');

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: ERROR_LEVEL, useValue: environment.logLevel },
    { provide: LOCALE_ID, useValue: 'es' },
    provideBrowserGlobalErrorListeners(), 
    provideRouter(routes, withComponentInputBinding()),
  ],
};
