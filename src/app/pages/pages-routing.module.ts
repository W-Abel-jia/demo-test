import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentComComponent } from './parent-com/parent-com.component';
import { FormsValidatorComponent } from './forms-validator/forms-validator.component';
import { AsyncDemoComponent } from './async-demo/async-demo.component';
import { EditTableComponent } from './edit-table/edit-table.component';
import { ModifyValidatorComponent } from './modify-validator/modify-validator.component';
import { ReactiveFormValidatorComponent } from './reactive-form-validator/reactive-form-validator.component';
import { FormNestedComponent } from './form-nested/form-nested.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { ComplexAnimationsComponent } from './complex-animations/complex-animations.component';
import { AnimationDemoComponent } from './animation-demo/animation-demo.component';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';
import { StyleDemoComponent } from './style-demo/style-demo.component';
import { OperatingDOMComponent } from './operating-dom/operating-dom.component';
import { DynamicComComponent } from './dynamic-com/dynamic-com.component';
import { ToUpperComComponent } from './to-upper-com/to-upper-com.component';
import { CopyToClipboardComponent } from './copy-to-clipboard/copy-to-clipboard.component';
import { SluggishnessTreeTableComponent } from './sluggishness-tree-table/sluggishness-tree-table.component';
import { TrafficLightComponent } from './traffic-light/traffic-light.component';
import { NgForTrackByComponent } from './ng-for-track-by/ng-for-track-by.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'parentCom' },
  { path: 'parentCom', component: ParentComComponent, data: { animationName: 'parentCom' } },
  { path: 'formsValidator', component: FormsValidatorComponent, data: { animationName: 'formsValidator' } },
  { path: 'asyncDemo', component: AsyncDemoComponent, data: { animationName: 'asyncDemo' } },
  { path: 'editTable', component: EditTableComponent, data: { animationName: 'editTable' } },
  { path: 'modifyValidator', component: ModifyValidatorComponent, data: { animationName: 'modifyValidator' } },
  {
    path: 'reactiveFormValidator',
    component: ReactiveFormValidatorComponent,
    data: { animationName: 'reactiveFormValidator' }
  },
  { path: 'formNested', component: FormNestedComponent, data: { animationName: 'formNested' } },
  { path: 'userInfo', component: UserInfoComponent, data: { animationName: 'userInfo' } },
  { path: 'complexAnimations', component: ComplexAnimationsComponent, data: { animationName: 'complexAnimations' } },
  { path: 'animationDemo', component: AnimationDemoComponent, data: { animationName: 'animationDemo' } },
  { path: 'lifecycleHooks', component: LifecycleHooksComponent, data: { animationName: 'lifecycleHooks' } },
  { path: 'styleDemo', component: StyleDemoComponent, data: { animationName: 'styleDemo' } },
  { path: 'operatingDOM', component: OperatingDOMComponent, data: { animationName: 'operatingDOM' } },
  { path: 'dynamicCom', component: DynamicComComponent, data: { animationName: 'dynamicCom' } },
  { path: 'lazyLoad', loadChildren: () => import('./lazy-load/lazy-load.module').then(m => m.LazyLoadModule) },
  { path: 'toUpperCom', component: ToUpperComComponent, data: { animationName: 'dynamicCom' } },
  { path: 'copyToClipboard', component: CopyToClipboardComponent, data: { animationName: 'operatingDOM' } },
  { path: 'trafficLight', component: TrafficLightComponent, data: { animationName: 'operatingDOM' } },
  { path: 'ngForTrackBy', component: NgForTrackByComponent, data: { animationName: 'dynamicCom' } },
  {
    path: 'sluggishnessTreeTableComponent',
    component: SluggishnessTreeTableComponent,
    data: { animationName: 'operatingDOM' }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
