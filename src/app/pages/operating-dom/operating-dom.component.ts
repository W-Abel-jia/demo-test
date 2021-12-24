import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {NzNotificationService} from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-operating-dom',
  templateUrl: './operating-dom.component.html',
  styleUrls: ['./operating-dom.component.less']
})
export class OperatingDOMComponent implements OnInit {
  @ViewChild('demo') demoDom: ElementRef;
  @ViewChild('demoInput') demoInput: ElementRef;

  constructor(private render2: Renderer2,
              private notification: NzNotificationService) {
  }

  ngOnInit() {
    this.render2.listen(this.demoInput.nativeElement, 'keydown', event => {
      console.log(event);
    });
  }

  // createElement & appendChild & createText
  public restDemoApi1(): void {
    const divEle = this.render2.createElement('div');
    const textEle = this.render2.createText('hello Render2');
    this.render2.appendChild(divEle, textEle);
    this.render2.appendChild(this.demoDom.nativeElement, divEle);
    this.notification.success('操作成功', '创建DOM成功～');
  }

  // setAttribute
  public handleSetAttribute(): void {
    this.render2.removeAttribute(this.demoDom.nativeElement, 'aria-hidden');
    this.notification.success('操作成功', '删除属性成功，请打开控制台查看～');
  }

  // removeAttribute
  public handleRemoveAttribute(): void {
    this.render2.removeAttribute(this.demoDom.nativeElement, 'aria-hidden');
    this.notification.success('操作成功', '删除属性成功，请打开控制台查看～');
  }

  // addClass
  public handleSetClass(): void {
    this.render2.addClass(this.demoDom.nativeElement, 'demoTest');
    this.notification.success('操作成功', '添加class成功～');
  }

  // removeClass
  public handleRemoveClass(): void {
    this.render2.removeClass(this.demoDom.nativeElement, 'demoTest');
    this.notification.success('操作成功', '删除class成功～');
  }

  // setStyle
  public handleSetStyle(): void {
    this.render2.setStyle(this.demoDom.nativeElement, 'border-radius', '100px');
    this.notification.success('操作成功', '删除 Style 成功～');
  }

  // removeStyle
  public handleRemoveStyle(): void {
    this.render2.removeStyle(this.demoDom.nativeElement, 'border-radius');
    this.notification.success('操作成功', '删除 Style 成功～');
  }

  // setProperty
  public handleSetProperty(): void {
    this.render2.setProperty(this.demoInput.nativeElement, 'value', 'demo');
    this.notification.success('操作成功', '添加 Property 成功～');
  }
}
