import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamSettingsComponent } from './param-settings.component';

describe('ParamSettingsComponent', () => {
  let component: ParamSettingsComponent;
  let fixture: ComponentFixture<ParamSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParamSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParamSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
