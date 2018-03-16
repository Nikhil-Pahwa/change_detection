import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StOneSecondComponent } from './st-one-second.component';

describe('StOneSecondComponent', () => {
  let component: StOneSecondComponent;
  let fixture: ComponentFixture<StOneSecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StOneSecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StOneSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
