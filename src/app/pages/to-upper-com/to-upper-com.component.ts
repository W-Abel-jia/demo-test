import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-to-upper-com',
  templateUrl: './to-upper-com.component.html',
  styleUrls: ['./to-upper-com.component.less']
})
export class ToUpperComComponent implements OnInit {
  public validateForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.validateForm = this.fb.group({
      name: [null]
    });
  }

  ngOnInit() {
  }

}
