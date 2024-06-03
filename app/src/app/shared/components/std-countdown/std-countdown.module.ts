import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountdownComponent } from './std-countdown.component';

@NgModule({
  declarations: [CountdownComponent],
  imports: [
    CommonModule
  ],
  exports: [CountdownComponent],
  schemas:[NO_ERRORS_SCHEMA]
})
export class CountdownModule {}
