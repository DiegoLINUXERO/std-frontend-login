import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SessionExpiredComponent } from './session-expired.component';
import { ROUTES } from './session-expired.routes';

@NgModule({
  declarations: [
    SessionExpiredComponent
  ],
  imports: [
    CommonModule,

    RouterModule.forChild(ROUTES)
  ]
})
export class SessionExpiredModule { }
