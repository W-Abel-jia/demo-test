import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HashLocationStrategy, LocationStrategy, registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';
import {IntroduceComponent} from './introduce/introduce.component';
import {DemoSiderComponent} from './demo-sider/demo-sider.component';
import {NameValidatorDirectiveDirective} from './public/directive/name-validator-directive.directive';
import {DemoInterceptorService} from './public/service/demo-interceptor.service';
import {ShowdownModule} from 'ngx-showdown';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {NZ_I18N, zh_CN} from 'ng-zorro-antd/i18n';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {NzLayoutModule} from 'ng-zorro-antd/layout';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    IntroduceComponent,
    DemoSiderComponent,
    NameValidatorDirectiveDirective,
  ],
  imports: [
    ShowdownModule,
    BrowserModule,
    AppRoutingModule,
    NzMenuModule,
    NzLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production})
  ],
  providers: [
    {
      provide: NZ_I18N,
      useValue: zh_CN
    },
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: DemoInterceptorService,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
