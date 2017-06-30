import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AotPhaseComponent } from './aot-phase.component';

describe('AotPhaseComponent', () => {
  let component: AotPhaseComponent;
  let fixture: ComponentFixture<AotPhaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AotPhaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AotPhaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
