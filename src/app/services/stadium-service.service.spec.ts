import { TestBed } from '@angular/core/testing';

import { StadiumServiceService } from './stadium-service.service';

describe('StadiumServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StadiumServiceService = TestBed.get(StadiumServiceService);
    expect(service).toBeTruthy();
  });
});
