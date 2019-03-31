import { TestBed } from '@angular/core/testing';

import { ServeyService } from './servey.service';

describe('ServeyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServeyService = TestBed.get(ServeyService);
    expect(service).toBeTruthy();
  });
});
