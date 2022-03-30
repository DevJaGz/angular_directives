import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const numberRangeValidator = (ranges: number[]): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    const minRange = ranges[0];
    const maxRange = ranges[1];
    if (minRange <= value && value <= maxRange) return null;
    return { notInRange: true };
  };
};

// export function numberRangeValidator(ranges: number[]): ValidatorFn {
//   return (control: AbstractControl): ValidationErrors | null => {
//     const value = control.value;
//     const minRange = ranges[0];
//     const maxRange = ranges[1];
//     if (minRange <= value && value <= maxRange) return null;
//     return { notInRange: true };
//   };
// }
