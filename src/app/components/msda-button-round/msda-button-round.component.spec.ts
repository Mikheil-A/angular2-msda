import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsdaButtonRoundComponent } from './msda-button-round.component';

describe('MsdaButtonRoundComponent', () => {
  let component: MsdaButtonRoundComponent;
  let fixture: ComponentFixture<MsdaButtonRoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsdaButtonRoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsdaButtonRoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
