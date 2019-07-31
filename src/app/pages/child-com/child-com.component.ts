import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';

import {Subscription} from 'rxjs';
import {ParentChildServiceService} from '../../parent-child-service.service';

@Component({
  selector: 'app-child-com',
  templateUrl: './child-com.component.html',
  styleUrls: ['./child-com.component.less']
})
export class ChildComComponent implements OnInit, OnChanges, OnDestroy {
  fromServiceData: Subscription;

  constructor(private transformService: ParentChildServiceService) {
    this.fromServiceData = this.transformService.transform.subscribe(data => {
      console.log(data);
    });
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.fromServiceData.unsubscribe();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  toParentEvent() {
    console.log('点击了子组件');
  }
}
