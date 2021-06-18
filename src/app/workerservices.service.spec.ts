import { TestBed } from '@angular/core/testing';

import { WorkerservicesService } from './workerservices.service';

describe('WorkerservicesService', () => {
  let service: WorkerservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkerservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
