import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./workflow/auth/auth.module').then((m) => m.AuthModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./workflow/home/home.module').then((m) => m.HomeModule)
  },
  {
    path: 'session-status',
    loadChildren: () => import('./workflow/session-status/session-status.module').then((m) => m.SessionStatusModule)
  }
];
