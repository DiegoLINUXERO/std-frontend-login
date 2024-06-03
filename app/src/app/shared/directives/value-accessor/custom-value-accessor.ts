import { ElementRef, HostListener, Directive } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Directive()
export class CustomValueAccessor implements ControlValueAccessor {
  constructor(protected el: ElementRef) {}
  protected lastValue: any;

  // tslint:disable-next-line: no-empty
  private onChange: (value: any) => void = () => {};
  // tslint:disable-next-line: no-empty
  private onTouched: () => void = () => {};

  writeValue(value: any) {
    this.el.nativeElement.value = this.lastValue = value == null ? '' : value;
  }

  handleChangeEvent(el: HTMLElement, value: any) {
    if (el === this.el.nativeElement) {
      if (value !== this.lastValue) {
        this.lastValue = value;
        this.onChange(value);
      }
    }
  }

  @HostListener('stdOnBlur', ['$event.target'])
  _handleBlurEvent(el: any) {
    if (el === this.el.nativeElement) {
      this.onTouched();
    }
  }

  registerOnChange(fn: (value: any) => void) {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.el.nativeElement.disabled = isDisabled;
  }
}
