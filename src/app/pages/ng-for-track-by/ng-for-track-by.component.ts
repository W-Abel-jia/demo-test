import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-ng-for-track-by',
  templateUrl: './ng-for-track-by.component.html',
  styleUrls: ['./ng-for-track-by.component.less']
})

export class NgForTrackByComponent implements OnInit, AfterViewInit {
  public demoList: Array<object>;
  @ViewChildren('noTrackBy') demoNoTrackBy: QueryList<ElementRef>;
  @ViewChildren('trackBy') demoTrackBy: QueryList<ElementRef>;
  public demoNoTrackByCount = 0;
  public demoWithTrackByCount = 0;

  constructor() {
  }

  ngOnInit() {
    this.handleGetDemoListData();
  }

  ngAfterViewInit() {
    trackChanges(this.demoNoTrackBy, () => this.demoNoTrackByCount++);
    trackChanges(this.demoTrackBy, () => this.demoWithTrackByCount++);
  }

  handleGetDemoListData() {
    this.demoList = [];
    for (let i = 0; i < 9; i++) {
      const object = {
        id: i,
        name: `demo${i}`,
      };
      this.demoList.push(object);
    }
  }

  handleGetDemoListDataWithChangeIds() {
    this.demoList = [];
    for (let i = 0; i < 9; i++) {
      const id = Math.random();
      const object = {
        id,
        name: `demo${id}`,
      };
      this.demoList.push(object);
    }
  }

  trackBy(index, item) {
    return item.id;
  }

}

function trackChanges(views: QueryList<ElementRef>, changed: () => void) {
  console.log(views);
  let oldRefs = views.toArray();
  console.log(oldRefs);
  views.changes.subscribe((changes: QueryList<ElementRef>) => {
    console.log(changes);
    const changedRefs = changes.toArray();
    const isSame = oldRefs.every((v, i) => v.nativeElement === changedRefs[i].nativeElement);
    if (!isSame) {
      oldRefs = changedRefs;
      setTimeout(changed, 0);
    }
  });
}
