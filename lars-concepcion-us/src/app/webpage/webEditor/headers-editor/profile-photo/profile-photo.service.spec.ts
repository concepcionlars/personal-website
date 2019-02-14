import { TestBed } from '@angular/core/testing';

import { ProfilePhotoService } from './profile-photo.service';

describe('ProfilePhotoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProfilePhotoService = TestBed.get(ProfilePhotoService);
    expect(service).toBeTruthy();
  });
});
