import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SecondaryTitleComponent} from '../secondary-title/secondary-title.component';

@NgModule({
  declarations: [
    SecondaryTitleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SecondaryTitleComponent
  ]
})
export class ComponentsModule {
}
