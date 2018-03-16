import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StTwoFirstComponent } from './st-two-first.component';

describe('StTwoFirstComponent', () => {
  let component: StTwoFirstComponent;
  let fixture: ComponentFixture<StTwoFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StTwoFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StTwoFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
