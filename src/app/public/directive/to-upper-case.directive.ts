import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appToUpperCase]'
})
export class ToUpperCaseDirective {

  constructor(private el: ElementRef) {
  }

  @HostListener('keyup')
  onKeyup() {
    this.handleUpperCase();
  }

  handleUpperCase() {
    this.el.nativeElement.value = String(this.el.nativeElement.value).toUpperCase();
  }

}
