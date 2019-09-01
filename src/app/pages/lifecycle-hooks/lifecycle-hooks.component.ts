import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck, Input,
  OnChanges, OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
  styleUrls: ['./lifecycle-hooks.component.less']
})
export class LifecycleHooksComponent implements OnChanges, OnInit,
  DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() name: string;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    console.log('this is ngOnChanges');
  }

  ngOnInit() {
    console.log('this is ngOnInit');
  }

  ngDoCheck(): void {
    console.log('this is ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('this is ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('this is ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('this is ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('this is ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('this is ngOnDestroy');
  }

}
