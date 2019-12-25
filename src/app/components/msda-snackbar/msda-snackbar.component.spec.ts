import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsdaSnackbarComponent } from './msda-snackbar.component';

describe('MsdaSnackbarComponent', () => {
  let component: MsdaSnackbarComponent;
  let fixture: ComponentFixture<MsdaSnackbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsdaSnackbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsdaSnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
