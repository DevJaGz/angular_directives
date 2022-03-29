import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appStyle]',
})
export class StyleDirective {
  @HostBinding('style.backgroundColor') bg: string = 'transparent';
  @HostListener('mouseenter') mousenter() {
    this.bg = 'pink';
  }
  @HostListener('mouseleave') mouseleave() {
    this.bg = 'transparent';
  }
  constructor() {}
}
