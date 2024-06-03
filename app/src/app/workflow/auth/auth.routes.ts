import { Routes } from '@angular/router';

import { AuthComponent } from './auth.component';
import { LoginComponent } from './pages/login/login.component';
import { SetPasswordComponent } from './pages/set-password/set-password.component';
import { VerificationCodeComponent } from './pages/verification-code/verification-code.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'set-password',
        component: SetPasswordComponent
      },
      {
        path: 'verification-code',
        component: VerificationCodeComponent
      },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      }
    ]
  }
];
