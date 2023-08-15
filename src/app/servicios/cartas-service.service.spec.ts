import { TestBed } from '@angular/core/testing';

import { RondaService } from './ronda-service.service';

describe('CartasServiceService', () => {
  let service: RondaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RondaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
