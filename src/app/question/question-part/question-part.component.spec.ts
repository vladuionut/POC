import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionPartComponent } from './question-part.component';

describe('QuestionPartComponent', () => {
  let component: QuestionPartComponent;
  let fixture: ComponentFixture<QuestionPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
