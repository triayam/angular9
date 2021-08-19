import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideinoutComponent } from './slideinout.component';

describe('SlideinoutComponent', () => {
  let component: SlideinoutComponent;
  let fixture: ComponentFixture<SlideinoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideinoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideinoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
