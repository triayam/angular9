import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummarypopupComponent } from './summarypopup.component';

describe('SummarypopupComponent', () => {
  let component: SummarypopupComponent;
  let fixture: ComponentFixture<SummarypopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummarypopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummarypopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
