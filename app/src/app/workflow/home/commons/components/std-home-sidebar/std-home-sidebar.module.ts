import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StdHomeSidebarComponent } from './std-home-sidebar.component';


@NgModule({
  declarations: [
    StdHomeSidebarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StdHomeSidebarComponent
  ],
})
export class StdHomeSidebarModule { }
