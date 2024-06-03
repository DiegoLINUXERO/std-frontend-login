import { Routes } from '@angular/router';
import { SessionStatusComponent } from './session-status.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: SessionStatusComponent,
    children: [
      {
        path: 'session-expired',
        loadChildren: () => import('./pages/session-expired/session-expired.module').then((m) => m.SessionExpiredModule),
      },
      {
        path: 'maintenance',
        loadChildren: () => import('./pages/maintenance/maintenance.module').then((m) => m.MaintenanceModule),
      },
      {
        path: 'active-session-other-browser',
        loadChildren: () => import('./pages/active-session-other-browser/active-session-other-browser.module').then((m) => m.ActiveSessionOtherBrowserModule),
      },
      {
        path: 'session-closed',
        loadChildren: () => import('./pages/session-closed/session-closed.module').then((m) => m.SessionClosedModule),
      },
      {
        path: '',
        redirectTo: 'session-expired',
        pathMatch: 'full',
      },
    ]
  },
];
