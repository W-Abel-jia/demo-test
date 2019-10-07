import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PagesRoutingModule} from './pages-routing.module';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {ParentComComponent} from './parent-com/parent-com.component';
import {FormsValidatorComponent} from './forms-validator/forms-validator.component';
import {AsyncDemoComponent} from './async-demo/async-demo.component';
import {EditTableComponent} from './edit-table/edit-table.component';
import {ModifyValidatorComponent} from './modify-validator/modify-validator.component';
import {ReactiveFormValidatorComponent} from './reactive-form-validator/reactive-form-validator.component';
import {FormNestedComponent} from './form-nested/form-nested.component';
import {UserInfoComponent} from './user-info/user-info.component';
import {ComplexAnimationsComponent} from './complex-animations/complex-animations.component';
import {AnimationDemoComponent} from './animation-demo/animation-demo.component';
import {ChildComComponent} from './child-com/child-com.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DemoStyleComponent } from './demo-style/demo-style.component';
import { DemoStyleOneComponent } from './demo-style-one/demo-style-one.component';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';
import { StyleDemoComponent } from './style-demo/style-demo.component';
import { StyleDemoChildComponent } from './style-demo-child/style-demo-child.component';
import { OperatingDOMComponent } from './operating-dom/operating-dom.component';
import { DynamicComComponent } from './dynamic-com/dynamic-com.component';

@NgModule({
  declarations: [
    ParentComComponent,
    FormsValidatorComponent,
    AsyncDemoComponent,
    EditTableComponent,
    ModifyValidatorComponent,
    ReactiveFormValidatorComponent,
    FormNestedComponent,
    UserInfoComponent,
    ComplexAnimationsComponent,
    AnimationDemoComponent,
    ChildComComponent,
    DynamicFormComponent,
    DemoStyleComponent,
    DemoStyleOneComponent,
    LifecycleHooksComponent,
    StyleDemoComponent,
    StyleDemoChildComponent,
    OperatingDOMComponent,
    DynamicComComponent
  ],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    PagesRoutingModule
  ]
})
export class PagesModule {
}
