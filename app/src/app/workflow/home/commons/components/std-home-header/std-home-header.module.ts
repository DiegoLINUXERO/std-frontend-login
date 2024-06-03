import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StdHomeHeaderComponent } from './std-home-header.component';

@NgModule({
  declarations: [
    StdHomeHeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StdHomeHeaderComponent
  ],
})
export class StdHomeHeaderModule { }
