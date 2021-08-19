import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatymComponent } from './patym.component';

describe('PatymComponent', () => {
  let component: PatymComponent;
  let fixture: ComponentFixture<PatymComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatymComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatymComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
