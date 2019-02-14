import { TestBed, inject } from '@angular/core/testing';

import { ImageServerService } from './image-server.service';

describe('ImageServerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImageServerService]
    });
  });

  it('should be created', inject([ImageServerService], (service: ImageServerService) => {
    expect(service).toBeTruthy();
  }));
});
