import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayTmTestComponent } from './pay-tm-test.component';

describe('PayTmTestComponent', () => {
  let component: PayTmTestComponent;
  let fixture: ComponentFixture<PayTmTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayTmTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayTmTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
