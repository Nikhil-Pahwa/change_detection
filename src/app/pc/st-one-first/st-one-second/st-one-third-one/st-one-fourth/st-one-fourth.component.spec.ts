import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StOneFourthComponent } from './st-one-fourth.component';

describe('StOneFourthComponent', () => {
  let component: StOneFourthComponent;
  let fixture: ComponentFixture<StOneFourthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StOneFourthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StOneFourthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
