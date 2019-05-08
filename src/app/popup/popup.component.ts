import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {state, transition, trigger, style, animate} from '@angular/animations';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.less'],
  host: {
    '[@state]': 'state',
  },
  animations: [
    trigger('state', [
      state('opened', style({transform: 'translateY(0%)'})),
      state('void, closed', style({transform: 'translateY(100%)', opacity: 0})),
      transition('* => *', animate('100ms ease-in')),
    ])
  ],
})
export class PopupComponent implements OnInit {
  private state: 'opened' | 'closed' = 'closed';
  _message: string;

  constructor() {
  }


  @Input()
  set message(message: string) {
    this._message = message;
    this.state = 'opened';
  }

  get message(): string {
    return this._message;
  }


  @Output()
  closed = new EventEmitter();

  ngOnInit() {
  }

}
