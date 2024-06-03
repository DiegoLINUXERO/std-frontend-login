import { NgModule } from '@angular/core';

import { OnlyNumbersDirective } from './validations/only-numbers-directive';
import { InputValueAccessorDirective } from './value-accessor/input-value-accessor.directive';
import { CheckValueAccessorDirective } from './value-accessor/checkbox-value-accessor.directive';

const validationDirectives = [OnlyNumbersDirective];

const valueAccessorDirectives = [
  InputValueAccessorDirective,
  CheckValueAccessorDirective,
];

@NgModule({
  declarations: [...validationDirectives, ...valueAccessorDirectives],
  exports: [...validationDirectives, ...valueAccessorDirectives],
})
export class StdDirectivesModule {}
