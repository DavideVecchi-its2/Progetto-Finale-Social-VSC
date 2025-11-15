import { TestBed } from '@angular/core/testing';

import { PermessiRuoliService } from './permessi-ruoli-service';

describe('PermessiRuoliService', () => {
  let service: PermessiRuoliService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PermessiRuoliService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
