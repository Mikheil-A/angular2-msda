import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsdaStepperComponent } from './msda-stepper.component';

describe('MsdaStepperComponent', () => {
  let component: MsdaStepperComponent;
  let fixture: ComponentFixture<MsdaStepperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsdaStepperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsdaStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
