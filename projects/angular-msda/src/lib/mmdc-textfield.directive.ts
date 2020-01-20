import { Directive, AfterViewInit, ElementRef } from '@angular/core';
import { MDCTextField } from '@material/textfield'

@Directive({
  selector: '[msdaMmdcTextfield]'
})
export class MmdcTextfieldDirective implements AfterViewInit {

  constructor(private _elementRef: ElementRef) { }

  ngAfterViewInit() {
    new MDCTextField(this._elementRef.nativeElement);
  }

}
