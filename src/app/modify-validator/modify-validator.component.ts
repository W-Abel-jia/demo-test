import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-modify-validator',
  templateUrl: './modify-validator.component.html',
  styleUrls: ['./modify-validator.component.less']
})
export class ModifyValidatorComponent implements OnInit {
  public validateForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.validateForm = this.fb.group({
      category: [null, [Validators.required]],
      name: [null, [Validators.required]],
      age: [null, [Validators.required]],
      address: [null, [Validators.required]],
    });
    this.validateForm.statusChanges.subscribe(status => {
      console.log(status);
      console.log(this.validateForm);
    });
  }

  ngOnInit() {
  }

  // 通过category选中的选项分别进行处理
  // public handleCategoryChange(category: string): void {
  //   switch (category) {
  //     case 'name':
  //       this.validateForm.get('name').setValidators([Validators.required]);
  //       this.validateForm.get('age').clearValidators();
  //       this.validateForm.get('address').clearValidators();
  //       break;
  //     case 'age':
  //       this.validateForm.get('name').clearValidators();
  //       this.validateForm.get('age').setValidators([Validators.required]);
  //       this.validateForm.get('address').clearValidators();
  //       break;
  //     case 'address':
  //       this.validateForm.get('name').clearValidators();
  //       this.validateForm.get('age').clearValidators();
  //       this.validateForm.get('address').setValidators([Validators.required]);
  //       break;
  //     default:
  //       break;
  //   }
  //   this.validateForm.get('name').updateValueAndValidity();
  //   this.validateForm.get('age').updateValueAndValidity();
  //   this.validateForm.get('address').updateValueAndValidity();
  // }

  // 通过category选中的选项分别进行处理
  public handleCategoryChange(category: string): void {
    switch (category) {
      case 'name':
        this.validateForm.get('name').setValidators([Validators.required]);
        this.validateForm.get('age').clearValidators();
        this.validateForm.get('address').clearValidators();
        break;
      case 'age':
        this.validateForm.get('name').clearValidators();
        this.validateForm.get('age').setValidators([Validators.required]);
        this.validateForm.get('address').clearValidators();
        break;
      case 'address':
        this.validateForm.get('name').clearValidators();
        this.validateForm.get('age').clearValidators();
        this.validateForm.get('address').setValidators([Validators.required]);
        break;
      default:
        break;
    }
    this.validateForm.updateValueAndValidity();
    this.validateForm.enable();
  }

}
