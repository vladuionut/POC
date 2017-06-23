import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternationlCalendarComponent } from './internationl-calendar.component';

describe('InternationlCalendarComponent', () => {
  let component: InternationlCalendarComponent;
  let fixture: ComponentFixture<InternationlCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternationlCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternationlCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
