# Angular 22

- Nombre: Angular AF 75828 – GR 102651
- Duración: 35 horas
- Modalidad: On-line
- Fechas/Horario:
  - Días L 5/10/2026 - V 9/10/2026
  - Horario 
    - L-J: 9:00 - 14:00 / 15:00 - 17:30
    - V: 9:00 - 14:00

- Instructor: Alejandro Cerezo Lasne <alce65@hotmail.es>

- Repositorio: <https://github.com/IconoTC/Angular-20-AF-91550-Grupo-102652>

Curso de Angular 22, versión publicada el 3 de Junio de 2026.

## Temario

- Introducción a Angular y preparación del entorno 
  - `¿Qué es Angular y qué resuelve? `
  - `Angular: fundamentos clave`
  - `Angular vs otros frameworks` 
  - `Preparar el entorno` 
  - `Crear el primer proyecto Angular` 
- Componentes en profundidad 
  - `Declaración de Componentes y Standalone Components`
  - `Comunicación entre componentes con @Input y @Output` 
  - `Ciclo de vida del componente` 
  - `Estilos: encapsulados y globales` 
- Templates, directivas y pipes 
  - `Binding de datos en plantillas` 
  - `Directivas estructurales`
  - `Directivas de atributo` 
  - `Pipes integrados` 
  - Creación de pipes personalizados
- Enrutamiento con provideRouter 
  - `Fundamentos del routing en Angular 20` 
  - `Configuración de rutas con provideRouter y Route` 
  - `Navegación entre vistas` 
  - `Parámetros de ruta y query params` 
  - `Lazy loading moderno `
  - Guards básicos 
  - Caso práctico: aplicación de un restaurante 
- Servicios e inyección de dependencias
  - `Introducción a los servicios` 
  - `Creación e inyección de servicios`
  - `Ámbito y ciclo de vida de servicios` 
  - `Comunicación HTTP con HttpClient` 
  - `Manejo básico de errores en peticiones HTTP` 
  - Interceptors HTTP para manejo global de peticiones y errores 
  - Lazy services y carga perezosa de servicios 
- Formularios template-driven 
  - `Estructura básica de formularios template-driven` 
  - `Binding y sincronización con ngModel` 
  - `Validaciones básicas en formularios template-driven` 
  - `Mostrar mensajes de error`
  - Formularios anidados simples 
- Formularios reactivos 
  - `Introducción a formularios reactivos` 
  - `Validaciones reactivas` 
  - `Manejo programático de errores` 
  - Validadores personalizados 
  - Validación de formularios complejos 
- Signals y estado reactivo 
  - `Introducción a Signals` 
  - `API básica de Signals` 
  - `Estado local reactivo sin necesidad de Observables` 
  - `Uso de Signals en templates Angular` 
  - `Diferencias entre Signals y RxJS`
  - `Integración y coexistencia entre Signals y RxJS`
- Comunicación avanzada y manejo de estado 
  - Comunicación entre componentes hermanos 
  - `Comparativa: EventEmitter vs Subject` 
  - `Patrones de arquitectura recomendados para manejo de estado`
  - `Uso básico de BehaviorSubject y Signals compartidos` 
  - `Introducción a estado compartido simple sin NgRx` 
  - Conceptos de gestión de estado reactivo a mayor escala (sin librerías externas).
- Testing de componentes y servicios 
  - `Importancia de testear en Angular`
  - `Configuración del entorno de testing` 
  - `Pruebas de componentes` 
  - `Pruebas de servicios` 
  - Pruebas de formularios 
  - `Introducción a pruebas end-to-end (E2E) con Cypress o Playwright` 
- Arquitectura escalable y buenas prácticas 
  - `Organización por features (Feature Folders)` 
  - `Reutilización de componentes y servicios` 
  - `Nomenclatura, rutas y estructura limpia`
  - Introducción a NgModules 
  - Migración y coexistencia entre NgModules y Standalone Components
  - Migración y coexistencia entre NgModules y Standalone Components
  - Monorepos y herramientas para proyectos grandes (Nx) 
  - Buenas prácticas de seguridad en Angular 
- Despliegue y optimización para producción 
  - `Variables de entorno` 
  - Comandos de build para producción 
  - Técnicas de lazy loading para mejorar performance 
  - Opciones populares para despliegue 
  - Análisis de bundles y optimización avanzada (tree shaking, preloading) 
  - Monitorización post-despliegue y feedback de usuarios

## Desarrollo del curso

### Día 1 (L-5): Introducción Angular. CLI. Componentes. Testing. 

<!-- - Presentación del curso, del instructor y de los alumnos.

- Introducción a Angular y su ecosistema.

- Entornos de desarrollo para Angular: 
  - Node: nvm (Node Version Manager)
  - Visual Studio Code
    - Extensiones recomendadas
- Instalación de Angular CLI.
- Workspace y proyectos en Angular.
  - Creación de un nuevo workspace Angular sin proyecto. `ng new`
  - Creación de un nuevo proyecto (app) Angular. `ng generate app`
  - Añadiendo ESLint (`ng add`) y Prettier.
  - Estructura de un workspace/proyecto Angular.
  - Creación de un workspace+proyecto desde Vitest. `npm create vitest@latest` -->

[descanso]: 11:20 - 11:45

<!-- - Angular CLI: Comandos básicos (1).
  - Servidor de desarrollo: `ng serve`.
  - Construcción del proyecto: `ng build`.

- Angular CLI: Comandos básicos (2).
  - Testing con Vitest: `ng test`.
  - Testing con Playwright: `ng e2e`
  - Despliegue: `ng deploy`. Opciones


- Generación de componentes: `ng generate`.
  - Elementos de un componente: HTML, CSS, TypeScript. 
  - Template y estilos inline o en ficheros.
  - Guía de estilos actualizada
  - Scaffolding 
  - Estilos globales: variables, reset... -->
 
<!-- NO INCLUIDO
- Elementos básicos de TypeScript.
  - Tipos de datos. Inferencia y anotación de tipos.
  - Tipado de funciones.
  - Tipos personalizados. Interfaces y tipos.
  - Clases ES6 en TypeScript.
    - Modificadores de acceso.
    - Getters y Setters.
    - Herencia.
    - Clases abstractas.
  - Módulos ES6 en TypeScript.
    - Import y Export.
    - Módulos por defecto y nombrados. 
-->

<!-- - Generación de componentes: `ng generate component <nombre>`.
  - Estilos: Encapsulación de estilos. ViewEncapsulation.
  - Componente 🧿CourseItem
    - Programación declarativa en el template: 
      - Del componente a la vista: interpolación {{}}, binding de propiedades []
      - De la vista al componente: binding de eventos () -> ya lo veremos
    - Signals en el estado del componente y en la plantilla. -->

[comida]: 14:00 - 15:00


  <!-- - Componente 🧿CourseItemSignals
    - Signals y asincronía. Zoneless + Estrategia OnPush  -->

  <!-- NO INCLUIDO
      - Estado en los componentes con ZoneJS v. Zoneless
        - Detección del cambio: Zone v. Zoneless
        - Detección del cambio: Estrategia OnPush
   -->

<!-- - Testing de componentes. Pruebas unitarias
  - Test con Vitest. Conceptos básicos y ejemplo
  - Elementos de los test en Angular: TestBed, fixture, detectChanges()
  - Test de implementación v. test de comportamiento.
  - Tests para componentes básicos.
    - Renderizado del componente (e.g. heading).
    - Procesos asíncronos. Timers 
    - Coverage. Instalación v-8 : `npm i -D @vitest/coverage-v8@4.1.11`
-->

<!-- - Componente 🧿CourseItemPro
  - Eventos
  - Computed signals -->


### Día 2 (M-6): Componentes del Layout. 

<!-- - Testing de componentes. Pruebas unitarias
    - Interacción con el componente (e.g. click en un botón).

- Scaffolding. Core
  - Componente 🧿Header. Estructura básica en CSS: Grid
  - Componente 🧿Footer
   - Test de Header y Footer
  - Componente 🧿LogoCoders. Fichero svg como template -->

[descanso]: 11:30 - 12:00


<!-- - Componente 🧿User. Svg como parte del template
    - Test de LogoCoders. Spies & mocks
  - Componente 🧿Card. Proyección de contenido
    - Uso en el componente 🧿App como contenedor principal.
    - Test de Card. TestingComponent

- Componentes de navegación  
  - 🧿Menu. Tipo y datos. Iteración con @for
  - Incorporación en App
  - 🧿Socials. @for + @switch: iconos svg de las redes sociales
  - Test de Menu y Socials. Renderizado y @for @switch

- Componentes CSS
  - 🧿toggle: Widget css como componente Angular
  - 🧿Separador. Componente de CSS -->

[comida]: 14:00 - 15:00

<!-- - Componente 🧿Search. Input de usuario: 2 way data binding. [(ngModel)]
- Referencias locales. #ref
  - Signal queries: viewChild, focus()
  - Ciclo de vida de los componentes 
  - Effects (primitiva de signal) 

- Componente 🧿SearchRef. Referencias locales en el template.  
- Test de Search. Renderizado y data binding

- Nuevo proyecto (app): demo-02.  `ng g app demo-02 --style css --ssr false -p ind -t -s`  

- Scaffolding. Features
  - Componentes (pages): 🧿Home, 🧿Dashboard, 🧿Courses, 🧿About (Angular).
  - Test de las páginas

- Eliminamos componentes innecesarios
  - SearchRef
  - Sample
  - CourseItemSignals -->

<!-- 
   - Ejercicio de componentization
    - 🧿Componentes incluidos en la demo de Angular
-->

### Día 3 (X-7). Paginas. Comunicaciones entre Componentes. Rutas, Servicios 

<!-- - Comunicación entre componentes (1)
  - Input. Decoradores @Input. función input(). Drilling

- Dashboard.
  - Componente 🧿Counter. Estado y eventos (click)
  - Refactor Componente Counter. Condicionales @If. [class}

- Testing de todos los componentes (comentado)
  - Test de Counter. Eventos. Errores al testar implementación

- Comunicación entre componentes (2) 
  - 🧿CounterList. Agrupando contadores. Estado en el componente padre
  - Input en los contadores. Revision de los totales
    - input() y linkedSignal
    - sincronización de diversas "fuentes" de cambio
  - Output. Decorador @Output. EventEmitter. Función output(). Eventos del contador
    - Contadores. Eventos con valor  -->

[descanso]: 11:30 - 12:00

  <!-- - Respuesta a los eventos. Estado en el componente padre (contenedor/controlador).
  - Computed signals 
  - Test de inputs y outputs.  -->

<!-- SOLO COMENTADO 
- model()
- linkedSignals (otro caso de uso)
  - 🧿Filter-options. selectedOption como linkedSignal
  - 🧿Filter. Comunicación entre componentes con linkedSignals

-->

<!-- - Rutas básicas. `app.routes.ts`
  - Array de rutas.
  - RouterOutlet en AppComponent.
  - Navegación. Componente menu. @for
  - SPA: RouterLink y RouterLinkActive -->

[comida]: 14:00 - 15:00

<!-- - Rutas básicas. `app.routes.ts` (continuación)
  - Array de opciones de menu
- Rutas Lazy. Default import en las páginas
- Test las paginas (componentes) con rutas. RouterTestingHarness

- 🧿Info. Componente para probar servicios...
- Introducción a los servicios en Angular.

- Servicios y Providers. DI (Dependency Injection)
  - Provider root v. provider en un componente / ruta
  - Ejemplo con un servicio simple: TimeService
  - Injector jerárquico. Servicios singleton y no singleton.  

  - Test del servicio TimeService
  - Test de componentes con servicios (mocks y spies).
    - Modificación del provider en el TestBed. `providers: [ { provide: TimeService, useValue: mockTimeService } ]`
    - Modificación del provider en el componente. `TestBed.overrideProvider()`

- Servicio Logger. 
  - environments de Angular
  - Uso de tokens de inyección  -->

### Día 4 (J-8). Pipes y directivas. Formularios TD, DD, SD

<!-- - Servicio Logger (final). 
  - Test del servicio Logger. Casos de uso 
  - 🧿Logger-Demo. Usos del servicio Logger

- Pipes
  - DatePipe. Location "es". 
  - Usar por defecto: inyección de dependencias
  - Pipes propios. Ejemplo: Pipe de `truncate`

- Directivas. Estructurales y de atributo   -->

<!-- Solo comentado 
- Directivas propias
  - Directivas de atributo: Stick
  - Directivas estructurales: introducción
    - Directivas estructurales: Role (ngIf)
-->

<!-- - Feature Auth
  
- RxJS (Observables)
  - Introducción. Observables, subscription, operadores.

  - Servicio Auth. Login simulado con Observables y con Promesas.
  - Test del servicio Auth. Casos de uso -->

[descanso] - 11:30 - 12:00


  <!-- - Rutas anidadas. 
    - Login y Register
    - Fichero de rutas propio de Auth. `auth.routes.ts`
  - Rutas con parámetros
    - LoginPage. Parámetros y formularios posibles
      (td, md-rx, signals)
    - @if / @switch -->

<!-- COMENTADO
 
  - Selección del formulario: 🧿Componente sidebar. 
    - linkedSignals. Comunicación entre componentes
    - respuesta a la navegación. router.events.subscribe()
-->

<!-- - 🧿Componente LoginFormTd: Forms Template Driven (TD)
    - NgForm implícito, NgModel. Referencias locales
    - Paso de ngForm al onSubmit: form.value; form.reset()
    - Validaciones  -->

[comida] 14:00 - 15:00

<!-- - 🧿Componente LoginFormMdRx: Formularios reactivos (DD). LoginForm
  - FormGroup, FormControl, FormBuilder
  - Binding desde el template [formGroup] formControlName y (ngSubmit)
  - Validaciones síncronas (y asíncronas).
    - Mensajes de validación 

- 🧿Componente LoginFormSignals: Formularios con Signals.
  - Model (signal), FieldTree, FieldState 
  - Binding desde el template  [formField] y (submit)
  - Schema de validación
  - Directiva FormRoot y submit -->

<!--
- RegisterForm. Otros controles HTML (comentado)
-->

<!-- - Custom controls
  -  🧿Componente Input. [FormValueControl]  -->

<!-- NO INCLUIDO -->
<!-- - Testing de formularios reactivos. -->

<!-- NO INCLUIDO
- Signal model()
  - Componente 🧿Check. Input y Output. Design System CheckBox
  - Componente 🧿Terms. Input y Output. Comunicación entre componentes
  - Uso de model en esta situación 
-->

### Día 5 (V-9).  Arquitectura. Servicios repo (HTTP) y state 
 
<!-- - Arquitectura de componentes
  - Componentes de contenedores vs de presentación.
  - Componentes inteligentes vs tontos.

- Ejemplo: Courses List
  - Entidad Courses. Modelo y mock de datos asíncrono.
  - Componente Courses-List. Lógica del estado
  - Componente Courses-Item. Input y Output (Eventos)
  - Componente Courses-Form. Output (Eventos) 

- Servicios y patrón Repository
  - Mock de datos. Interface de los repositorios
  - Uso de promesas en los servicios.
  - Los mismos repositorios usando RxJS (Observables). 
  - Uso del repo en el componente

- API server fake basado en JSONServer. -->

[descanso] 11:30 - 12:00

<!--  No incluido
- Testing de servicios.
  - Tests del servicio
    - Test de métodos CRUD.
    - Test de promesas (async, whenStable, expectAsync).
  - Testing de componentes con servicios (mocks y spies). -->

<!-- - API server fake basado en JSONServer.
  - Prueba con Postman -->

<!-- - Uso de environments.  -->

<!-- 
- Nuevo proyecto (demo-02).
--> 


<!-- - Introducción a los servicios HTTP en Angular.
- Servicio HttpClient. Observables (RxJs).

  - Antes de Angular 21: Configuración del servicio HTTP: provider
  - Feature Notes. Creación de un ApiRepositoryService. 
  - Uso desde el componente (NoteList).  
 
  - Repositorio y lógica de negocio (estado). Estrategias 
  - Métodos CRUD. getAll() y getById()
  - Métodos CRUD. add(), update(), delete()
  - Uso en los componentes. Inyección de dependencias. -->

<!-- NO INCLUIDO
  - Tests de servicios HTTP real (sin mock) 
  - Tests de servicios HTTP con HttpTestingController
  - Test de componentes con servicios HTTP (mocks y spies).
-->
 
<!-- - Servicios stateful: patrón Flux. Feature Courses

  - Estado con Signals: signal (WriteableSignal) y readOnly/computed (Signal)
  
  - Servicio Store con CoursesState
    - Estado privado con WriteableSignal
    - Estado público con Signal (asReadOnly) 
    - Métodos para modificar el estado (add, toggle, remove)
    - Uso del estado desde los componentes ToDo... -->

<!-- 
  - Uso desde cualquier parte de la aplicación (Header)  
-->

<!-- Mencionado
  - Estado con RxJS: Subjects
    - Estado privado con BehaviorSubject
    - Estado público con Observable (asObservable)
    - Métodos para modificar el estado (add, toggle, remove)
    - Gestión de errores
-->

<!-- NO INCLUIDO
- Más novedades (Signals)
  - resources: httpClientResource (Angular 22)
- Interceptors y Guards
  - Testing  
-->

