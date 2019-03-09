import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalBrandComponent } from './personal-brand.component';

describe('PersonalBrandComponent', () => {
  let component: PersonalBrandComponent;
  let fixture: ComponentFixture<PersonalBrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalBrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
