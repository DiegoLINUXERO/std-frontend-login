import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginLayoutBottomComponent } from './login-layout-bottom.component';

@NgModule({
  declarations: [
    LoginLayoutBottomComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoginLayoutBottomComponent,
  ]
})
export class LoginLayoutBottomModule { }
