import { inject, InjectionToken, Service } from '@angular/core';

export type ErrorLevel = 0 | 1 | 2 | 3 | 4;

// Una alternativa es usar un enum,
// enum ErrorLevel {
//   NONE = 0, // 0: No se muestran errores
//   ERROR = 1, // 1: Se muestran errores
//   WARN = 2, // 2: Se muestran errores y advertencias
//   INFO = 3, // 3: Se muestran errores, advertencias e información
//   LOG = 4 // 4: Se muestran errores, advertencias, información y logs
// }

export const ERROR_LEVEL = new InjectionToken<ErrorLevel>('Error level for logging');

@Service()
export class Logger {

  readonly #level = inject(ERROR_LEVEL, { optional: true }) ?? 0;
  
  //constructor(@Inject(ERROR_LEVEL) private readonly #level: ErrorLevel = 4) {}

  public get level(): ErrorLevel {
    return this.#level;
  }

  error(message: string, ...optionalParams: unknown[]): void {
    if (this.#level >= 1) {
      console.error(message, ...optionalParams);
    }
  }

  warn(message: string, ...optionalParams: unknown[]): void {
    if (this.#level >= 2) {
      console.warn(message, ...optionalParams);
    }
  }

  info(message: string, ...optionalParams: unknown[]): void {
    if (this.#level >= 3) {
      console.info(message, ...optionalParams);
    }
  }

  log(message: string, ...optionalParams: unknown[]): void {
    if (this.#level >= 4) {
      console.log(message, ...optionalParams);
    }
  }
}
