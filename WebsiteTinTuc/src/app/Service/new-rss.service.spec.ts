import { TestBed } from '@angular/core/testing';

import { NewRssService } from './new-rss.service';

describe('NewRssService', () => {
  let service: NewRssService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewRssService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
