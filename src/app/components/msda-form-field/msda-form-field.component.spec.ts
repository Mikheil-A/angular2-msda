import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsdaFormFieldComponent } from './msda-form-field.component';

describe('MsdaFormFieldComponent', () => {
  let component: MsdaFormFieldComponent;
  let fixture: ComponentFixture<MsdaFormFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsdaFormFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsdaFormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
