import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DemoNameAsyncValidatorService} from '../public/demo-name-async-validator.service';

@Component({
  selector: 'app-async-demo',
  templateUrl: './async-demo.component.html',
  styleUrls: ['./async-demo.component.less']
})
export class AsyncDemoComponent implements OnInit {
  public validateForm: FormGroup;

  constructor(private fb: FormBuilder, private demoNameAsync: DemoNameAsyncValidatorService) {
    this.validateForm = this.fb.group({
      demoName: [null, {
        validators: [Validators.required],
        asyncValidators: [this.demoNameAsync.validate.bind(this.demoNameAsync)],
        updateOn: 'blur'
      }]
    });
  }

  ngOnInit() {
  }

}
