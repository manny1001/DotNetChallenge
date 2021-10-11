/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DatatransferService } from './datatransfer.service';

describe('Service: Datatransfer', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatatransferService]
    });
  });

  it('should ...', inject([DatatransferService], (service: DatatransferService) => {
    expect(service).toBeTruthy();
  }));
});
