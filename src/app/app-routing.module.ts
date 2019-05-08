import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ParentComComponent} from './parent-com/parent-com.component';

const routes: Routes = [
  {path: '', component: ParentComComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
