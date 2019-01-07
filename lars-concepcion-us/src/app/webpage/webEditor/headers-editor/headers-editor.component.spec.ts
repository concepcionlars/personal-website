import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadersEditorComponent } from './headers-editor.component';

describe('HeadersEditorComponent', () => {
  let component: HeadersEditorComponent;
  let fixture: ComponentFixture<HeadersEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadersEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadersEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
