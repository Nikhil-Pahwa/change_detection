import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StOneThirdOneComponent } from './st-one-third-one.component';

describe('StOneThirdOneComponent', () => {
  let component: StOneThirdOneComponent;
  let fixture: ComponentFixture<StOneThirdOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StOneThirdOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StOneThirdOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
