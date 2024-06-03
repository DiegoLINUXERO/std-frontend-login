import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaintenanceComponent } from './maintenance.component';
import { ROUTES } from './maintenance.routes';

@NgModule({
  declarations: [
    MaintenanceComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class MaintenanceModule { }
