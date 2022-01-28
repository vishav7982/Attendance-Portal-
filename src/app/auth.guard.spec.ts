import { inject, TestBed } from '@angular/core/testing';

import { AuthGuardGuard } from './auth.guard';

describe('AuthGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({});
     providers: [AuthGuardGuard];
  });

  it('should be created', inject([AuthGuardGuard], (guard :AuthGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
