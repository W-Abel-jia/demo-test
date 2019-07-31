import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {Template} from '@angular/compiler/src/render3/r3_ast';
import {ChildComComponent} from '../child-com/child-com.component';
import {ParentChildServiceService} from '../../parent-child-service.service';

@Component({
  selector: 'app-parent-com',
  templateUrl: './parent-com.component.html',
  styleUrls: ['./parent-com.component.less']
})
export class ParentComComponent implements OnInit {
  // toChild: string;
  count = 0;
  @ViewChild(ChildComComponent)

  private child: ChildComComponent;

  constructor(private transformService: ParentChildServiceService) {
  }

  ngOnInit() {
    // console.log('ddsadd');
    // console.log('eqweqwee')

  }

  parentEvent() {
    this.transformService.setTransformData('这里是来自父组件的数据');
  }

  // getChild(info) {
  //   console.log(info);
  // }
}
