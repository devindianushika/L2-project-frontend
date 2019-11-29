import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignNewSubjectComponent } from './assign-new-subject.component';

describe('AssignNewSubjectComponent', () => {
  let component: AssignNewSubjectComponent;
  let fixture: ComponentFixture<AssignNewSubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignNewSubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignNewSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
