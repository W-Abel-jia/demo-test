import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgZorroAntdModule, NZ_I18N, zh_CN} from 'ng-zorro-antd';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';
import {ParentComComponent} from './parent-com/parent-com.component';
import {ChildComComponent} from './child-com/child-com.component';
import {AnimationDemoComponent} from './animation-demo/animation-demo.component';
import {ComplexAnimationsComponent} from './complex-animations/complex-animations.component';
import {UserInfoComponent} from './user-info/user-info.component';
import { EditTableComponent } from './edit-table/edit-table.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    ParentComComponent,
    ChildComComponent,
    AnimationDemoComponent,
    ComplexAnimationsComponent,
    UserInfoComponent,
    EditTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{provide: NZ_I18N, useValue: zh_CN}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
