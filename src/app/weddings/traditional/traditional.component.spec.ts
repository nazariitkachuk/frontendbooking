import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraditionalComponent } from './traditional.component';

describe('TraditionalComponent', () => {
  let component: TraditionalComponent;
  let fixture: ComponentFixture<TraditionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraditionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraditionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
