import {
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef,
  OnInit,
  AfterViewInit,
} from '@angular/core';

@Directive({
  selector: '[appDom]',
})
export class DomDirective implements OnInit, AfterViewInit {
  private _entrada = '';

  constructor() {}

  @Input()
  get entrada() {
    return this._entrada;
  }
  set entrada(value: string) {
    console.log('set entrada', value);
    this._entrada = value;
  }

  ngOnInit(): void {
    console.log('ngOnInit', this.entrada);
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit', this.entrada);
  }
}
