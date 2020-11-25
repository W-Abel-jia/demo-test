import { Component, OnDestroy, OnInit } from '@angular/core';
import { state, style, trigger } from '@angular/animations';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-traffic-light',
  templateUrl: './traffic-light.component.html',
  styleUrls: ['./traffic-light.component.less'],
  animations: [
    trigger('traffic-light', [
      state('green', style({
        backgroundColor: 'green',
      })),
      state('red', style({
        backgroundColor: 'red',
      })),
      state('yellow', style({
        backgroundColor: 'yellow',
      })),
      state('empty', style({
        backgroundColor: '#fff'
      })),
    ])
  ]
})
export class TrafficLightComponent implements OnInit, OnDestroy {
  public trafficLight = null;

  constructor() {
  }

  ngOnInit() {
    const trafficLightColor = ['green', 'yellow', 'red', null];
    const intervalTime = interval(3000);
    const intervalTimeSub = intervalTime.pipe(take(4)).subscribe(value => {
      this.trafficLight = trafficLightColor[value];
    }, () => {
    }, () => {
      intervalTimeSub.unsubscribe();
    });
  }

  ngOnDestroy() {
  }

}
