import {
  Directive,
  ElementRef,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appIf]',
})
export class IfDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {}

  @Input() set appIf(value: boolean) {
    if (value) this.viewContainerRef.createEmbeddedView(this.templateRef);
    else this.viewContainerRef.clear();
  }

  @Input() set appIfElse(value: TemplateRef<any>) {
    this.viewContainerRef.createEmbeddedView(value);
  }
}
