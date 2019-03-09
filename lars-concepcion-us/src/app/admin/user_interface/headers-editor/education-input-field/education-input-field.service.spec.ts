import { TestBed, inject } from '@angular/core/testing';

import { EducationInputFieldService } from './education-input-field.service';

describe('EducationInputFieldService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EducationInputFieldService]
    });
  });

  it('should be created', inject([EducationInputFieldService], (service: EducationInputFieldService) => {
    expect(service).toBeTruthy();
  }));
});
