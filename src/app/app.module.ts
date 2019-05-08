import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { ParentComComponent } from './parent-com/parent-com.component';
import { ChildComComponent } from './child-com/child-com.component';
import { PopupComponent } from './popup/popup.component';
import { InlineStyleComComponent } from './inline-style-com/inline-style-com.component';
import { StyleComComponent } from './style-com/style-com.component';
import { AnimationDemoComponent } from './animation-demo/animation-demo.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    ParentComComponent,
    ChildComComponent,
    PopupComponent,
    InlineStyleComComponent,
    StyleComComponent,
    AnimationDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
