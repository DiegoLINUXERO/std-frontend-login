import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { StdAuthHeaderModule } from './commons/components/std-auth-header/std-auth-header.module';

import { AuthComponent } from './auth.component';
import { ROUTES } from './auth.routes';

@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    
    StdAuthHeaderModule,
    
    RouterModule.forChild(ROUTES)
  ]
})
export class AuthModule { }
