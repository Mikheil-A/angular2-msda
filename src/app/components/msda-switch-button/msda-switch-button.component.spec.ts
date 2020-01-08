import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsdaSwitchButtonComponent } from './msda-switch-button.component';

describe('MsdaSwitchButtonComponent', () => {
  let component: MsdaSwitchButtonComponent;
  let fixture: ComponentFixture<MsdaSwitchButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsdaSwitchButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsdaSwitchButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
