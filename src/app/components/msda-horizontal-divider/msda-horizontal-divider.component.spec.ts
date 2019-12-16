import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsdaHorizontalDividerComponent } from './msda-horizontal-divider.component';

describe('MsdaHorizontalDividerComponent', () => {
  let component: MsdaHorizontalDividerComponent;
  let fixture: ComponentFixture<MsdaHorizontalDividerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsdaHorizontalDividerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsdaHorizontalDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
