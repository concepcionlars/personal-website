import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationInputFieldComponent } from './education-input-field.component';

describe('EducationInputFieldComponent', () => {
  let component: EducationInputFieldComponent;
  let fixture: ComponentFixture<EducationInputFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationInputFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationInputFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
