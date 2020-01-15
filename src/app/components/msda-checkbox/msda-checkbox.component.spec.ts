import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsdaCheckboxComponent } from './msda-checkbox.component';

describe('MsdaCheckboxComponent', () => {
  let component: MsdaCheckboxComponent;
  let fixture: ComponentFixture<MsdaCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsdaCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsdaCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
