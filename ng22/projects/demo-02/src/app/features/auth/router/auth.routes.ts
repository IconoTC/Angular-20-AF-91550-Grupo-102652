import { Routes } from "@angular/router";

export const authRoutes: Routes =  [
      {
        path: 'login',
        //component: LoginPage,
        redirectTo: 'login/td',  
      },
      {
        path: 'login/:formType',
        loadComponent: () => import('../pages/login-page'),
        title: 'Login | Demo 02',   
      },
      {
        path: 'register',
        //component: RegisterPage,
        loadComponent: () => import('../pages/register-page'),
        title: 'Registro | Demo 02',
        data: {
          label: 'Registro',
        },
      }
    ]