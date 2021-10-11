import { Component, ElementRef } from '@angular/core';
import { DatatransferService } from './service/datatransfer.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'frontend';
  APIURL: string;
  constructor(
    private dataTransfer: DatatransferService,
    private rootElement: ElementRef
  ) {
    this.APIURL = this.rootElement.nativeElement.getAttribute('BASEURI');
    this.dataTransfer.passConfigUrl(this.APIURL);
  }
}
