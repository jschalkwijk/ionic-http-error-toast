import { TestBed } from '@angular/core/testing';

import { IonicHttpToasterService } from './ion-http-toastr.service';

describe('IonicHttpToasterService', () => {
  let service: IonicHttpToasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IonicHttpToasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
