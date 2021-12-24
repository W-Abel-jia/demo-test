import {
  Component,
  Input,
  OnInit, Renderer2,
} from '@angular/core';
import {NzNotificationService} from 'ng-zorro-antd/notification';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'p[appCopyable],label[appCopyable],span[appCopyable],[appCopyable]',
  exportAs: 'appCopyable',
  templateUrl: './copy-clipboard.component.html',
  styleUrls: ['./copy-clipboard.component.less']
})
export class CopyClipboardComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('copyContent') copyContent: string;

  constructor(private notification: NzNotificationService,
              private render2: Renderer2) {
  }

  ngOnInit() {
  }

  public handleCopyContent() {
    const copyText = this.render2.createText(this.copyContent);
    const copyElement = this.render2.createElement('label');
    this.render2.appendChild(copyElement, copyText);
    this.render2.appendChild(document.body, copyElement);
    this.render2.setStyle(copyElement, 'opacity', '0');
    const range = document.createRange();
    range.selectNode(copyElement);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    this.notification.success('复制成功～', '');
    window.getSelection().removeAllRanges();
    this.render2.removeChild(document.body, copyElement);
  }

}
