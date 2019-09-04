import {Component} from '@angular/core';

interface UserInfo {
  name: string;
  age: number;
  address: string[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'demo-test';
  user: UserInfo;
}
