import { Directive, Input } from '@angular/core';
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
export class NumberRangeDirective implements Validator {
  // private _ranges: number[] = [];

  // @Input() set numberRange(ranges: number[]) {
  //   this._ranges = ranges;
  // }

  // validate(control: AbstractControl): ValidationErrors | null {
  //   return numberRangeValidator(this._ranges)(control);
  // }

  @Input() numberRange: number[] = [];

  validate(control: AbstractControl): ValidationErrors | null {
    return numberRangeValidator(this.numberRange)(control);
  }
}
