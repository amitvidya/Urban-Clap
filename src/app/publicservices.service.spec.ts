import { TestBed } from '@angular/core/testing';

import { PublicservicesService } from './publicservices.service';

describe('PublicservicesService', () => {
  let service: PublicservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PublicservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
