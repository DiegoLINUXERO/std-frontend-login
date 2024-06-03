import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ActiveSessionOtherBrowserComponent } from './active-session-other-browser.component';
import { ROUTES } from './active-session-other-browser.routes';

@NgModule({
  declarations: [
    ActiveSessionOtherBrowserComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class ActiveSessionOtherBrowserModule { }
