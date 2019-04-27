import { TestBed } from '@angular/core/testing';

import { LeftSidebarService } from './left-sidebar.service';

describe('LeftSidebarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LeftSidebarService = TestBed.get(LeftSidebarService);
    expect(service).toBeTruthy();
  });
});
