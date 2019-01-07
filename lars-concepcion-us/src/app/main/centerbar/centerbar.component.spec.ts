import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterbarComponent } from './centerbar.component';

describe('CenterbarComponent', () => {
  let component: CenterbarComponent;
  let fixture: ComponentFixture<CenterbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CenterbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
