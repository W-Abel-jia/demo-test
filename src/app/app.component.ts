import {Component, OnInit} from '@angular/core';

interface UserInfo {
  name: string;
  age: number;
  address: string[];
}

interface A {
  x: string;
  y: number;
  z: string[];
}

interface B {
  y: string;
  g: number;
}

// type C = A & B;
type C = A | B;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'demo-test';
  // user: UserInfo;
  // c: C;

  ngOnInit(): void {
    // this.c.y = '1';
    // this.c.y = '1';
    // this.c.x = 'demo';
  }
}
