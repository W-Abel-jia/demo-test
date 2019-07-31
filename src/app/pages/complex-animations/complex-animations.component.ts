import {Component, OnInit} from '@angular/core';
import {animate, query, stagger, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-complex-animations',
  templateUrl: './complex-animations.component.html',
  styleUrls: ['./complex-animations.component.less'],
  animations: [
    trigger('pageAnimations', [
      transition(':enter', [
        query('.title,.demo', [
          style({opacity: 0, transform: 'translateY(-100px)'}),
          stagger(-300, [
            animate('500ms cubic-bezier(0.35, 0, 0.25, 1)',
              style({opacity: 1, transform: 'translateY(0)'}))
          ])
        ], {optional: true}),
      ]),
    ])]
})
export class ComplexAnimationsComponent implements OnInit {
  public demos = ['demo', 'demo'];

  constructor() {
  }

  ngOnInit() {
  }

  handleAddDemo() {
    this.demos = [...this.demos, 'demo'];
  }

}
