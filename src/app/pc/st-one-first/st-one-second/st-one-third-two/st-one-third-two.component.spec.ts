import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StOneThirdTwoComponent } from './st-one-third-two.component';

describe('StOneThirdTwoComponent', () => {
  let component: StOneThirdTwoComponent;
  let fixture: ComponentFixture<StOneThirdTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StOneThirdTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StOneThirdTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
