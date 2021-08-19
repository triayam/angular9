import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThridpartyComponent } from './thridparty.component';

describe('ThridpartyComponent', () => {
  let component: ThridpartyComponent;
  let fixture: ComponentFixture<ThridpartyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThridpartyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThridpartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
