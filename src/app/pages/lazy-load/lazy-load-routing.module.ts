import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LazyLoadComComponent} from './lazy-load-com/lazy-load-com.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'lazyLoadCom'},
  {path: 'lazyLoadCom', component: LazyLoadComComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyLoadRoutingModule {
}
