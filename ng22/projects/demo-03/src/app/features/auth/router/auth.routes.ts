import { Routes } from '@angular/router';

export const authRoutes: Routes = [
  {
    path: 'login',
    //component: LoginPage,
    redirectTo: 'login/td',
  },
  {
    path: 'login/:formType',
    loadComponent: () => import('../pages/login-page'),
    title: 'Login | Demo 03',
  },
  {
    path: 'register',
    //component: RegisterPage,
    loadComponent: () => import('../pages/register-page'),
    title: 'Registro | Demo 03',
    data: {
      label: 'Registro',
    },
  },
];
