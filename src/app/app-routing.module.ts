import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {IntroduceComponent} from './introduce/introduce.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'introduce'},
  {path: 'introduce', component: IntroduceComponent},
  {path: 'pages', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
