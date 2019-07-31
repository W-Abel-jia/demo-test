import {Directive} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';
import {nameValidator} from '../../pages/forms-validator/forms-validator.component';

@Directive({
  selector: '[appNameValidatorDirective]',
  providers: [{provide: NG_VALIDATORS, useExisting: NameValidatorDirectiveDirective, multi: true}]
})
export class NameValidatorDirectiveDirective implements Validator {

  constructor() {
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return nameValidator()(control);
  }

}
