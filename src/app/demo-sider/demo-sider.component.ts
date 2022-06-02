import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-sider',
  templateUrl: './demo-sider.component.html',
  styleUrls: ['./demo-sider.component.less']
})
export class DemoSiderComponent implements OnInit {

  comInfo = [
    { title: '父子组件传值', routLink: 'parentCom' },
    { title: '简单的动画', routLink: 'animationDemo' },
    { title: '复杂动画序列', routLink: 'complexAnimations' },
    { title: '可编辑的table的Demo', routLink: 'editTable' },
    { title: '模板驱动式表单验证', routLink: 'formsValidator' },
    { title: '响应式表单异步校验器', routLink: 'asyncDemo' },
    { title: '动态修改响应式表单的校验器', routLink: 'modifyValidator' },
    { title: '响应式表单的验证', routLink: 'reactiveFormValidator' },
    { title: '响应式表单的嵌套', routLink: 'formNested' },
    { title: '响应式表单', routLink: 'userInfo' },
    { title: '生命周期钩子', routLink: 'lifecycleHooks' },
    { title: '组件样式demo', routLink: 'styleDemo' },
    { title: '操作DOM', routLink: 'operatingDOM' },
    { title: '动态创建组件', routLink: 'dynamicCom' },
    { title: '惰性加载路由', routLink: 'lazyLoad' },
    { title: '转换大写字符', routLink: 'toUpperCom' },
    { title: '复制到剪切板', routLink: 'copyToClipboard' },
    { title: '惰性加载树状表格', routLink: 'sluggishnessTreeTableComponent' },
    { title: '红绿灯', routLink: 'trafficLight' },
    { title: '*ngFor性能', routLink: 'ngForTrackBy' },
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
