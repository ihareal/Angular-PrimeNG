import { TestBed } from '@angular/core/testing';

import { CheckForLoginService } from './check-for-login.service';

describe('CheckForLoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CheckForLoginService = TestBed.get(CheckForLoginService);
    expect(service).toBeTruthy();
  });
});
