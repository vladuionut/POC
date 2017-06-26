import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorPartComponent } from './error-part.component';

describe('ErrorPartComponent', () => {
  let component: ErrorPartComponent;
  let fixture: ComponentFixture<ErrorPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
