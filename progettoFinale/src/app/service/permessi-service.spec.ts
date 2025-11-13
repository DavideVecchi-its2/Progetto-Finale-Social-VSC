import { TestBed } from '@angular/core/testing';

import { PermessiService } from './permessi-service';

describe('PermessiService', () => {
  let service: PermessiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PermessiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
