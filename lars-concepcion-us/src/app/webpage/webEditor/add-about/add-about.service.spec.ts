import { TestBed, inject } from '@angular/core/testing';

import { AddAboutService } from './add-about.service';

describe('AddAboutService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddAboutService]
    });
  });

  it('should be created', inject([AddAboutService], (service: AddAboutService) => {
    expect(service).toBeTruthy();
  }));
});
