import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {AnimationRoute} from '../animations/animation-route';

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
  styleUrls: ['./app.component.less'],
  animations: [AnimationRoute]
})
export class AppComponent implements OnInit {
  title = 'demo-test';
  // user: UserInfo;
  // c: C;

  ngOnInit(): void {
    // const s = Symbol('d');
    // console.log(typeof s);
    // console.log(s);

    // this.c.y = '1';
    // this.c.y = '1';
    // this.c.x = 'demo';
    const sym = Symbol();
    const a = {};
    Object.defineProperty(a, sym, {value: 'abc'});
    console.log(a);
  }

  animationRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animationName;
  }
}
