import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StdAuthHeaderComponent } from './std-auth-header.component';

import { CountdownModule } from 'src/app/shared/components/std-countdown/std-countdown.module';

@NgModule({
  declarations: [StdAuthHeaderComponent],
  imports: [
    CommonModule,
    
    CountdownModule
  ],
  exports: [StdAuthHeaderComponent],
})
export class StdAuthHeaderModule {}
