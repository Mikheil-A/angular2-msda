import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsdaSelectComponent } from './msda-select.component';

describe('MsdaSelectComponent', () => {
  let component: MsdaSelectComponent;
  let fixture: ComponentFixture<MsdaSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsdaSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsdaSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
