import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsdaChipsComponent } from './msda-chips.component';

describe('MsdaChipsComponent', () => {
  let component: MsdaChipsComponent;
  let fixture: ComponentFixture<MsdaChipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsdaChipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsdaChipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
