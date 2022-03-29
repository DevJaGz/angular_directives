import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[myFor]',
})
export class ForStatementDirective implements OnInit {
  private items: any[] = [];
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  @Input('myForOf')
  public set myForOf(items: any) {
    this.items = items;
    //Clear any existing items
    this.viewContainer.clear();
  }

  @Input('myForItemsAtOnce')
  public itemsAtOnce: number = 10;

  @Input('myForIntervalLength')
  public intervalLength: number = 50;

  ngOnInit(): void {
    console.log(this.itemsAtOnce);

    for (let i = 0; i < this.items.length; i++) {
      this.viewContainer.createEmbeddedView(this.templateRef, {
        index: i,
        $implicit: this.items[i],
      });
    }
  }
}
