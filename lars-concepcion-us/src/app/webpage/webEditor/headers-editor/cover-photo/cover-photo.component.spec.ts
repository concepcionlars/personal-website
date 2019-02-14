import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverPhotoComponent } from './cover-photo.component';

describe('CoverPhotoComponent', () => {
  let component: CoverPhotoComponent;
  let fixture: ComponentFixture<CoverPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoverPhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoverPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
