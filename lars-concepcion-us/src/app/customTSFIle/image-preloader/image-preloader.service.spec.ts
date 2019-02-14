import { TestBed, inject } from '@angular/core/testing';

import { ImagePreloaderService } from './image-preloader.service';

describe('ImagePreloaderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImagePreloaderService]
    });
  });

  it('should be created', inject([ImagePreloaderService], (service: ImagePreloaderService) => {
    expect(service).toBeTruthy();
  }));
});
