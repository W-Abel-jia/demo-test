import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'app-style-demo',
  templateUrl: './style-demo.component.html',
  styleUrls: ['./style-demo.component.less']
})
export class StyleDemoComponent implements OnInit {
  public isChoose = false;
  public isYellow = true;

  constructor() {
  }

  ngOnInit() {
  }

  @HostBinding('class') get componentClass() {
    return this.isYellow ? 'theme-yellow' : 'theme-red';
  }

  // 设置 组件的状态
  public handleChoose(): void {
    this.isChoose = !this.isChoose;
  }

  // 更换主题
  public handleShiftTheme(): void {
    this.isYellow = !this.isYellow;
  }

}
