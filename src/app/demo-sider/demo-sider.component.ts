import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-demo-sider',
  templateUrl: './demo-sider.component.html',
  styleUrls: ['./demo-sider.component.less']
})
export class DemoSiderComponent implements OnInit {

  comInfo = [
    {title: '父子组件传值', routLink: 'parentCom'},
    {title: '简单的动画', routLink: 'animationDemo'},
    {title: '复杂动画序列', routLink: 'complexAnimations'},
    {title: '可编辑的table的Demo', routLink: 'editTable'},
    {title: '模板驱动式表单验证', routLink: 'formsValidator'},
    {title: '响应式表单异步校验器', routLink: 'asyncDemo'},
    {title: '动态修改响应式表单的校验器', routLink: 'modifyValidator'},
    {title: '响应式表单的验证', routLink: 'reactiveFormValidator'},
    {title: '响应式表单', routLink: 'userInfo'},
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
