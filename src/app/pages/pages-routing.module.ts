import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
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
import {LifecycleHooksComponent} from './lifecycle-hooks/lifecycle-hooks.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'parentCom'},
  {path: 'parentCom', component: ParentComComponent},
  {path: 'formsValidator', component: FormsValidatorComponent},
  {path: 'asyncDemo', component: AsyncDemoComponent},
  {path: 'editTable', component: EditTableComponent},
  {path: 'modifyValidator', component: ModifyValidatorComponent},
  {path: 'reactiveFormValidator', component: ReactiveFormValidatorComponent},
  {path: 'formNested', component: FormNestedComponent},
  {path: 'userInfo', component: UserInfoComponent},
  {path: 'complexAnimations', component: ComplexAnimationsComponent},
  {path: 'animationDemo', component: AnimationDemoComponent},
  {path: 'lifecycleHooks', component: LifecycleHooksComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
