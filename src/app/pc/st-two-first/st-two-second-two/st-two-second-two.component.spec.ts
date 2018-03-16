import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StTwoSecondTwoComponent } from './st-two-second-two.component';

describe('StTwoSecondTwoComponent', () => {
  let component: StTwoSecondTwoComponent;
  let fixture: ComponentFixture<StTwoSecondTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StTwoSecondTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StTwoSecondTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
