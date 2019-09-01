import {ApplicationRef, Component, OnInit} from '@angular/core';
import {FormControl, Validators, FormGroup, FormArray, FormBuilder} from '@angular/forms';
import {TaskStatus} from '../../task-status.enum';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.less']
})
export class UserInfoComponent implements OnInit {
  // validateForm = new FormGroup({
  //   name: new FormControl(null, [Validators.required]),
  //   age: new FormControl(null, [Validators.required]),
  //   email: new FormControl(null, [Validators.required]),
  //   phone: new FormArray([new FormControl(null)]),
  //   address: new FormGroup({
  //     area: new FormControl(null, [Validators.required]),
  //     street: new FormControl(null, [Validators.required]),
  //     houseId: new FormControl(null, [Validators.required]),
  //   })
  // });
  validateForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      age: [null, [Validators.required]],
      email: [null, [Validators.required]],
      phone: this.fb.array([this.fb.control(null, [Validators.required])]),
      address: this.fb.group({
        area: [null, [Validators.required]],
        street: [null, [Validators.required]],
        houseId: [null, [Validators.required]],
      })
    });
    // this.validateForm.get('name').valueChanges.subscribe(nameChange => {
    //   console.log(nameChange);
    // });
    // this.addressForm.get('street')
    //   .valueChanges
    //   .subscribe(streetChange => {
    //     console.log(streetChange);
    //   });
    // this.validateForm.get('address')
    //   .get('area').valueChanges
    //   .subscribe(areaChange => {
    //     console.log(areaChange);
    //   });
  }

  get addressForm() {
    return this.validateForm.get('address') as FormGroup;
  }

  get phoneArray() {
    return this.validateForm.get('phone') as FormArray;
  }

  ngOnInit() {
    console.log(TaskStatus.a);
    console.log(TaskStatus[0]);

  }

  public handleInitForm(): void {
    this.validateForm.reset();
  }

  public handleSubmit(): void {
    console.log('点击了提交表单');
    console.log(this.validateForm.value);
  }

  public patchValue() {
    // this.phoneArray.patchValue(['13800000000', '13800000011']);

    const setValue = ['13800000000', '13800000011'];
    setValue.forEach(value => {
      this.phoneArray.push(new FormControl(value));
    });
    // this.validateForm.setValue({
    //   name: 'W先生',
    //   age: '25',
    //   email: 'xx@xx.com',
    //   address: {area: 'area赋值', street: 'street赋值'}
    // });
    // this.validateForm.patchValue({
    //   name: 'W先生',
    //   age: '25',
    //   email: 'xx@xx.com',
    //   address: {area: 'area赋值', street: 'street赋值'}
    // });
    // this.validateForm.get('address').setValue({
    //   area: 'area赋值',
    //   street: 'street赋值',
    //   houseId: 'houseId赋值'
    // });
    // this.addressForm.setValue({
    //   area: 'area赋值',
    //   street: 'street赋值',
    //   houseId: 'houseId赋值'
    // });
    // this.validateForm.get('address').patchValue({
    //   area: 'area赋值',
    //   street: 'street赋值',
    //   houseId: 'houseId赋值'
    // });
    // this.validateForm.get('name').setValue('W先生');
    // this.validateForm.get('name').patchValue('W先生');
    // this.validateForm.get('address').get('area').setValue('area赋值');
    // this.validateForm.get('address').get('area').patchValue('area赋值');
    // this.addressForm.get('area').setValue('area赋值');
    // this.addressForm.get('area').patchValue('area赋值');
  }

  addPhone() {
    // (this.validateForm.get('phone') as FormArray).push(new FormControl(null));
    this.phoneArray.push(new FormControl(null));
  }

  removePhone(index) {
    // (this.validateForm.get('phone') as FormArray).removeAt(index);
    this.phoneArray.removeAt(index);
  }

}

// houseId: 'houseId赋值'
