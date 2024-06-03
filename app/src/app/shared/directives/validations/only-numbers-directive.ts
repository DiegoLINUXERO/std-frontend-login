import { Directive, ElementRef, HostListener } from '@angular/core';

declare var window: any;

@Directive({
  selector: 'tdp-st-textbox[tdpOnlyNumbers]', // eve-st-textbox[currency]
})
export class OnlyNumbersDirective {
  constructor(private el: ElementRef) {}

  @HostListener('keypress', ['$event'])
  _handleInputEvent(e: KeyboardEvent) {
    const current: string = this.el.nativeElement.value;
    const keyPressed: string = String(e.key);
    const textToEvaluate = current.concat(keyPressed);
    const regex: RegExp = new RegExp(/^\d*\.?\d{0,2}$/g);
    const isValid = regex.test(textToEvaluate);
    if (!isValid) {
      e.preventDefault();
    }
  }

  @HostListener('paste', ['$event'])
  onPaste(e: any) {
    const current: string = this.el.nativeElement.value;
    const noClipboardData = window.clipboardData === undefined;
    const valuePasted = noClipboardData
      ? String(e.originalEvent.clipboardData.getData('Text'))
      : String(e.clipboardData.getData('text'));

    const textToEvaluate = current.concat(valuePasted);
    const regex: RegExp = new RegExp(/^[0-9]*$/g);
    const isValid = regex.test(textToEvaluate);

    if (!isValid) {
      e.preventDefault();
    } else {
      this.el.nativeElement.value = textToEvaluate;
    }
  }
}
