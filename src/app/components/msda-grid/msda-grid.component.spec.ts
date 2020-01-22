import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsdaGridComponent } from './msda-grid.component';

describe('MsdaGridComponent', () => {
  let component: MsdaGridComponent;
  let fixture: ComponentFixture<MsdaGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsdaGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsdaGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
