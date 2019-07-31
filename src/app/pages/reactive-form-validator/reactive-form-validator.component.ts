import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpServiceService} from '../../public/http-service.service';


@Component({
  selector: 'app-reactive-form-validator',
  templateUrl: './reactive-form-validator.component.html',
  styleUrls: ['./reactive-form-validator.component.less']
})
export class ReactiveFormValidatorComponent implements OnInit {
  public validateForm: FormGroup;

  constructor(private fb: FormBuilder, private httpService: HttpServiceService) {
    this.validateForm = this.fb.group({
      name: [null, [
        // Validators.required,
        // Validators.maxLength(32),
        // Validators.minLength(2),
        // Validators.pattern(/^[a-z0-9]+$/i)
      ]
      ],
      age: [null, [
        // Validators.required,
        // Validators.max(100),
        // Validators.min(0),
        // Validators.pattern(/^\d+$/)
      ]
      ],
    });
  }

  ngOnInit() {
    console.log(this.httpService.validatorName('tom'));
  }

  public submitForm(): void {

  }

}
