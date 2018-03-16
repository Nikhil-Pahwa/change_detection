import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StTwoSecondOneComponent } from './st-two-second-one.component';

describe('StTwoSecondOneComponent', () => {
  let component: StTwoSecondOneComponent;
  let fixture: ComponentFixture<StTwoSecondOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StTwoSecondOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StTwoSecondOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
