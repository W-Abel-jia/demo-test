import {Component, OnInit} from '@angular/core';
import {AbstractControl, ValidatorFn} from '@angular/forms';


export function nameValidator(): ValidatorFn {

  return (control: AbstractControl): { [key: string]: any } | null => {
    // tslint:disable-next-line:no-shadowed-variable
    const nameValidator = /^\w+$/;
    const isValid = nameValidator.test(control.value);
    return isValid ? null : {nameValidator: {value: control.value}};
  };
}


@Component({
  selector: 'app-forms-validator',
  templateUrl: './forms-validator.component.html',
  styleUrls: ['./forms-validator.component.less']
})

export class FormsValidatorComponent implements OnInit {
  public name = null;

  constructor() {
  }

  ngOnInit() {
  }

}
