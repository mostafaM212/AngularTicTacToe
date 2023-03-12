import { TestBed } from '@angular/core/testing';

import { TictaktoeService } from './tictaktoe.service';

describe('TictaktoeService', () => {
  let service: TictaktoeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TictaktoeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
