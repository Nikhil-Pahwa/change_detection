import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StOneFirstComponent } from './st-one-first.component';

describe('StOneFirstComponent', () => {
  let component: StOneFirstComponent;
  let fixture: ComponentFixture<StOneFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StOneFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StOneFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
