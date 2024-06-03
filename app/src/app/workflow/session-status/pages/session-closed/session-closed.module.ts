import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SessionClosedComponent } from './session-closed.component';
import { ROUTES } from './session-closed.routes';

@NgModule({
  declarations: [
    SessionClosedComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class SessionClosedModule { }
