import {Component, OnInit} from '@angular/core';
import {AsyncValidator, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.less']
})
export class UserInfoComponent implements OnInit {
  nameFormControl = new FormControl(null, [Validators.required]);

  constructor() {
  }

  ngOnInit() {
  }

}
