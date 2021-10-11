import { Injectable } from '@angular/core';
import { DatatransferService } from './datatransfer.service';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  subscription: Subscription;
  config_url: string;
  constructor(private data: DatatransferService) {
    this.subscription = this.data.currentUrl.subscribe(
      (data) => (this.config_url = data)
    );
  }
}
