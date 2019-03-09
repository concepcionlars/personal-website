import { TestBed, inject } from '@angular/core/testing';

import { HeadersEditorService } from './headers-editor.service';

describe('HeadersEditorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeadersEditorService]
    });
  });

  it('should be created', inject([HeadersEditorService], (service: HeadersEditorService) => {
    expect(service).toBeTruthy();
  }));
});
