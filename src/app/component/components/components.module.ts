import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SecondaryTitleComponent} from '../secondary-title/secondary-title.component';
import {CopyClipboardComponent} from '../copy-clipboard/copy-clipboard.component';
import {NZ_ICONS, NzIconModule} from 'ng-zorro-antd/icon';
import {NzNotificationModule} from 'ng-zorro-antd/notification';


@NgModule({
  declarations: [
    SecondaryTitleComponent,
    CopyClipboardComponent
  ],
  imports: [
    CommonModule,
    NzIconModule,
    NzNotificationModule,
  ],
  exports: [
    CopyClipboardComponent,
    SecondaryTitleComponent
  ],
  providers: [
    // {provide: NZ_ICONS, useValue: icons}
  ]
})
export class ComponentsModule {
}
