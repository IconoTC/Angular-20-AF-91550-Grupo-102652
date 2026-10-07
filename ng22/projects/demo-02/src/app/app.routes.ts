import { Routes } from '@angular/router';
import { MenuOption } from './core/types/menu-option';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    // component: HomePage,
    loadComponent: () => import('./features/home/home-page'),
    title: 'Inicio | Demo 02',
    data: {
      label: 'Inicio',
    },
  },
  {
    path: 'dashboard',
    //component: DashboardPage,
    loadComponent: () => import('./features/dashboard/dashboard-page'),
    title: 'Dashboard | Demo 02',
    data: {
      label: 'Dashboard',
    },
  },
  {
    path: 'courses',
    //component: CoursesPage,
    loadComponent: () => import('./features/courses/courses-page'),
    title: 'Cursos | Demo 02',
    data: {
      label: 'Cursos',
    },
  },
  {
    path: 'about',
    //component: AboutPage,
    loadComponent: () => import('./features/about/about-page'),
    title: 'Acerca de | Demo 02',
    data: {
      label: 'Acerca de',
    },
  },
  {
    path: '**',
    redirectTo: 'home',
  }
];


export const MENU_OPTIONS: MenuOption[]  = routes
  .filter((route) => route.data && route.data['label'])
  .map((route) => ({
    label: route.data!['label'] as string,
    path: route.path as string,
  }));