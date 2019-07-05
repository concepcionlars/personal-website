import { TestBed } from '@angular/core/testing';

import { ProfileCoverService } from './profile-cover.service';

describe('ProfileCoverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProfileCoverService = TestBed.get(ProfileCoverService);
    expect(service).toBeTruthy();
  });
});
