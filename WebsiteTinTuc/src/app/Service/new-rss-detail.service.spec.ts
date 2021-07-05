import { TestBed } from '@angular/core/testing';

import { NewRssDetailService } from './new-rss-detail.service';

describe('NewRssDetailService', () => {
  let service: NewRssDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewRssDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
