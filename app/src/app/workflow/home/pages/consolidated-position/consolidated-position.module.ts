import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ConsolidatedPositionComponent } from './consolidated-position.component';
import { ROUTES } from './consolidated-position.routes';

@NgModule({
  declarations: [
    ConsolidatedPositionComponent
  ],
  imports: [
    CommonModule,

    RouterModule.forChild(ROUTES)
  ]
})
export class ConsolidatedPositionModule { }
