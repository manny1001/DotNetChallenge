import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DatatransferService {
  private config_url = new BehaviorSubject('default data');
  currentUrl = this.config_url.asObservable();
  constructor() {}
  passConfigUrl(data: string) {
    this.config_url.next(data);
  }
}
