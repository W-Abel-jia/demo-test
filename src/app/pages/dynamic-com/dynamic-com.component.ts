import {
  AfterContentInit,
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {EditTableComponent} from '../edit-table/edit-table.component';

@Component({
  selector: 'app-dynamic-com',
  templateUrl: './dynamic-com.component.html',
  styleUrls: ['./dynamic-com.component.less']
})
export class DynamicComComponent implements OnInit, AfterContentInit {
  @ViewChild('dynamic', {read: ViewContainerRef}) dynamicCom: ViewContainerRef;
  public comOne: ComponentRef<EditTableComponent>;
  public comTwo: ComponentRef<EditTableComponent>;

  constructor(private comFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
  }

  ngAfterContentInit() {
    const childComp = this.comFactoryResolver.resolveComponentFactory(EditTableComponent);
    this.comOne = this.dynamicCom.createComponent(childComp, 0);
    this.comOne.instance.dataSet = [{
      key: '999',
      name: '动态创建组件',
      status: 'edit',
      age: 32,
      address: '来自动态的数据'
    }];

    this.comOne.instance.backInfo.subscribe((info) => {
      console.log(info);
    });
    this.comTwo = this.dynamicCom.createComponent(childComp, 4);
    this.comTwo.instance.dataSet = [{
      key: '1000',
      name: '动态创建组件2',
      status: 'edit',
      age: 32,
      address: '来自动态的数据2'
    }];
  }

  // 销毁组件按钮回调函数
  handleDestroyCom() {
    this.comOne.destroy();
  }

}
