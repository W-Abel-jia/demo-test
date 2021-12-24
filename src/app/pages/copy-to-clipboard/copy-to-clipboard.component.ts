import { Component, OnInit, Renderer2 } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-copy-to-clipboard',
  templateUrl: './copy-to-clipboard.component.html',
  styleUrls: ['./copy-to-clipboard.component.less']
})
export class CopyToClipboardComponent implements OnInit {

  constructor(private notification: NzNotificationService) {
  }

  ngOnInit() {
  }

  public handleCopyToClipboard(copyWord: HTMLElement) {
    const range = document.createRange();
    range.selectNode(copyWord);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    this.notification.success('复制成功～', '');
    window.getSelection().removeAllRanges();
  }
}
