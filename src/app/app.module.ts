import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DomDirective } from './directives/dom.directive';
import { ForStatementDirective } from './directives/for-statement.directive';
import { StyleDirective } from './directives/style.directive';
import { IfDirective } from './directives/if.directive';
import { NumberRangeDirective } from './directives/number-range.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DomDirective,
    ForStatementDirective,
    StyleDirective,
    IfDirective,
    NumberRangeDirective,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
