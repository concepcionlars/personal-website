import { TestBed } from '@angular/core/testing';

import { ImageStyleService } from './image-style.service';

describe('ImageStyleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImageStyleService = TestBed.get(ImageStyleService);
    expect(service).toBeTruthy();
  });
});
