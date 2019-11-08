import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyLoadRoutingModule } from './lazy-load-routing.module';
import { LazyLoadComComponent } from './lazy-load-com/lazy-load-com.component';

@NgModule({
  declarations: [LazyLoadComComponent],
  imports: [
    CommonModule,
    LazyLoadRoutingModule
  ]
})
export class LazyLoadModule { }
