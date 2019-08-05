import { Directive, ElementRef, HostListener, Input  } from '@angular/core';


@Directive({
  selector: '[appNocharacter]'
})
export class NocharacterDirective {
 inputElement: ElementRef;

  @Input('appNocharacter') appNocharacters: string;
  regexStr = '^[a-zA-Z0-9.-]*$';
  constructor(private el: ElementRef) {
  }
  @HostListener('keypress', ['$event']) onKeyPress(event) {
         return new RegExp(this.regexStr).test(event.key);
        }

   @HostListener('paste', ['$event']) blockPaste(event: KeyboardEvent) {
     this.validateFields(event);
  }

validateFields(event) {
    setTimeout(() => {
      this.el.nativeElement.value = this.el.nativeElement.value.replace(/[^A-Za-z ]/g, '').replace(/\s/g,'');
      event.preventDefault();
    }, 100);
  }
}
