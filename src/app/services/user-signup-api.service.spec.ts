import { TestBed } from '@angular/core/testing';

import { UserSignupApiService } from './user-signup-api.service';

describe('UserSignupApiService', () => {
  let service: UserSignupApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserSignupApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
