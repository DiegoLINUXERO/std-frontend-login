import { Directive, ElementRef, HostListener, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
 
import { CustomValueAccessor } from './custom-value-accessor';
 
@Directive({
  selector: 'std-checkbox',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckValueAccessorDirective),
      multi: true,
    },
  ],
})
export class CheckValueAccessorDirective extends CustomValueAccessor {
  constructor(el: ElementRef) {
    super(el);
  }
 
  override writeValue(value: any) {
    this.el.nativeElement.checked = this.lastValue = value == null ? false : value;
  }
 
  @HostListener('stdOnClick', ['$event.target'])
  _handleOnClick(el: any) {
    this.handleChangeEvent(el, el.checked);
  }
 
  @HostListener('stdOnChange', ['$event.target'])
  _handleOnChange(el: any) {
    this.handleChangeEvent(el, el.checked);
  }

  @HostListener('changeEvent', ['$event.target', '$event.detail'])
  _checkboxEvent(el: HTMLElement, detail: {checked: boolean}) {
    this.handleChangeEvent(el, detail.checked);
  }
}