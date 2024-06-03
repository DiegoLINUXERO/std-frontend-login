import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SessionStatusComponent } from './session-status.component';
import { ROUTES } from './session-status.routes';

@NgModule({
  declarations: [
    SessionStatusComponent,
  ],
  imports: [
    CommonModule,

    RouterModule.forChild(ROUTES)
  ]
})
export class SessionStatusModule { }
