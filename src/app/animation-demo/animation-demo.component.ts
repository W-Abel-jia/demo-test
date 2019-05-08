import {Component, OnInit} from '@angular/core';
import {trigger, state, style, animate, transition, query, keyframes} from '@angular/animations';

@Component({
  selector: 'app-animation-demo',
  templateUrl: './animation-demo.component.html',
  styleUrls: ['./animation-demo.component.less'],
  animations: [
    // 定义动画的触发器放在 animations 元数据属性中
    trigger('stateChange', [
      state('isYellow', style(
        {
          height: '200px',
          width: '200px',
          opacity: 1,
          backgroundColor: 'yellow'
        }
      )),
      state('isGreen', style(
        {
          height: '100px',
          width: '100px',
          opacity: 0.5,
          backgroundColor: 'green'
        }
      )),
      state('isRed', style(
        {
          height: '150px',
          width: '150px',
          opacity: 0.5,
          backgroundColor: 'red'
        }
      )),
      transition('isYellow <=> isGreen', animate('4s', keyframes(
        [
          style({backgroundColor: 'blue', offset: 0.1}),
          style({backgroundColor: 'red', offset: 0.2}),
          style({backgroundColor: 'orange', offset: 0.8})
        ]
      ))),
      transition('* => isRed', animate('0.5s', style({opacity: '*'}))),
      transition('* => *', animate('5s')),
    ]),
    trigger('fly', [
      state('flyIn', style({
        transform: 'translateX(0)',
        color: 'blue',
      })),
      transition('void => *', [
        style({
          transform: 'translateX(-100%)',
          color: 'yellow'
        }),
        animate('2s'),
      ]),
      transition('* => void', [
        animate('2s', style({
          transform: 'translateX(100%)',
          color: 'red'
        }))
      ])
    ])

  ],
})
export class AnimationDemoComponent implements OnInit {
  public isChange = false;
  public isInOut = false;
  public isDisabled = false;

  constructor() {
  }

  ngOnInit() {
  }

  public handleChange(state): void {
    this.isChange = state;
  }

  public handleInOut() {
    this.isInOut = !this.isInOut;
  }

  public handleDisabled() {
    this.isDisabled = !this.isDisabled;
  }

  public handleFlyStart(event: AnimationEvent) {
    console.log(event);
  }

}
