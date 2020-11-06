import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondaryTitleComponent } from '../secondary-title/secondary-title.component';
import { CopyClipboardComponent } from '../copy-clipboard/copy-clipboard.component';
import { IconDefinition } from '@ant-design/icons-angular';
import { NZ_ICONS, NzNotificationModule, NzIconModule } from 'ng-zorro-antd';
import { CopyOutline } from '@ant-design/icons-angular/icons';

const icons: IconDefinition[] = [CopyOutline];

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
    { provide: NZ_ICONS, useValue: icons }
  ]
})
export class ComponentsModule {
}
