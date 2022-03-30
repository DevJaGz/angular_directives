import { Directive, Input, OnInit } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';
import { numberRangeValidator } from '../validators/number-range.validator';

@Directive({
  selector: '[numberRange]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: NumberRangeDirective,
      multi: true,
    },
  ],
})
export class NumberRangeDirective implements Validator, OnInit {
  private _ranges: number[] = [];

  @Input() set numberRange(ranges: number[]) {
    this._ranges = ranges;
  }

  ngOnInit(): void {
    console.log('NumberRangeDirective');
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return numberRangeValidator(this._ranges)(control);
  }
}
