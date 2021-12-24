import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PagesRoutingModule} from './pages-routing.module';
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
import {DynamicFormComponent} from './dynamic-form/dynamic-form.component';
import {DemoStyleComponent} from './demo-style/demo-style.component';
import {DemoStyleOneComponent} from './demo-style-one/demo-style-one.component';
import {LifecycleHooksComponent} from './lifecycle-hooks/lifecycle-hooks.component';
import {StyleDemoComponent} from './style-demo/style-demo.component';
import {StyleDemoChildComponent} from './style-demo-child/style-demo-child.component';
import {OperatingDOMComponent} from './operating-dom/operating-dom.component';
import {DynamicComComponent} from './dynamic-com/dynamic-com.component';
import {ComponentsModule} from '../component/components/components.module';
import {ToUpperComComponent} from './to-upper-com/to-upper-com.component';
import {ToUpperCaseDirective} from '../public/directive/to-upper-case.directive';
import {CopyToClipboardComponent} from './copy-to-clipboard/copy-to-clipboard.component';
import {SluggishnessTreeTableComponent} from './sluggishness-tree-table/sluggishness-tree-table.component';
import {TrafficLightComponent} from './traffic-light/traffic-light.component';
import {NgForTrackByComponent} from './ng-for-track-by/ng-for-track-by.component';
import {NzDividerModule} from 'ng-zorro-antd/divider';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzTableModule} from 'ng-zorro-antd/table';
import {NzAlertModule} from "ng-zorro-antd/alert";

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
    DynamicComComponent,
    ToUpperComComponent,
    ToUpperCaseDirective,
    CopyToClipboardComponent,
    SluggishnessTreeTableComponent,
    TrafficLightComponent,
    NgForTrackByComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PagesRoutingModule,
    ComponentsModule,
    NzDividerModule,
    NzLayoutModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzTableModule,
    NzAlertModule,
  ]
})
export class PagesModule {
}
