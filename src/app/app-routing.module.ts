import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {IntroduceComponent} from './introduce/introduce.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'introduce'},
  {path: 'introduce', component: IntroduceComponent},
  {path: 'pages', loadChildren: './pages/pages.module#PagesModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
