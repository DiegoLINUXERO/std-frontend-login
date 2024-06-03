import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StdHomeSecurityComponent } from './std-home-security.component';

@NgModule({
  declarations: [
    StdHomeSecurityComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StdHomeSecurityComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class StdHomeSecurityModule { }
