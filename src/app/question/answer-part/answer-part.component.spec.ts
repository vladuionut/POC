import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerPartComponent } from './answer-part.component';

describe('AnswerPartComponent', () => {
  let component: AnswerPartComponent;
  let fixture: ComponentFixture<AnswerPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswerPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
