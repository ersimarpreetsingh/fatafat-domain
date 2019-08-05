import { Directive, AfterViewInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appInputAutofocus]'
})
export class InputAutofocusDirective implements AfterViewInit {
  constructor(private el: ElementRef) {
  }

  ngAfterViewInit() {
    this.el.nativeElement.focus();
  }
}
