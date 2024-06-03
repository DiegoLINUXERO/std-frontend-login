import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'consolidated-position',
        loadChildren: () => import('./pages/consolidated-position/consolidated-position.module').then((m) => m.ConsolidatedPositionModule),
      },
      {
        path: '',
        redirectTo: 'consolidated-position',
        pathMatch: 'full',
      },
    ]
  },
];
