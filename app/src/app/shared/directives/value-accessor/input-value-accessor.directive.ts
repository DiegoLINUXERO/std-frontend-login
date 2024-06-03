import { Directive, ElementRef, HostListener, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { CustomValueAccessor } from './custom-value-accessor';

@Directive({
  selector: 'std-input, std-pin-input',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputValueAccessorDirective),
      multi: true,
    },
  ],
})
export class InputValueAccessorDirective extends CustomValueAccessor {
  constructor(el: ElementRef) {
    super(el);
  }

  @HostListener('changeEvent', ['$event.target', '$event.detail'])
  _inputEvent(el: any, detail: any) {
    this.handleChangeEvent(el, detail);
  }
}
