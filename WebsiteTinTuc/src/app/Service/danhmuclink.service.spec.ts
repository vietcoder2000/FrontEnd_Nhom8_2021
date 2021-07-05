import { TestBed } from '@angular/core/testing';

import { DanhmuclinkService } from './danhmuclink.service';

describe('DanhmuclinkService', () => {
  let service: DanhmuclinkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DanhmuclinkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
