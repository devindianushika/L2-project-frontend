import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectAndTeacherCardComponent } from './subject-and-teacher-card.component';

describe('SubjectAndTeacherCardComponent', () => {
  let component: SubjectAndTeacherCardComponent;
  let fixture: ComponentFixture<SubjectAndTeacherCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectAndTeacherCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectAndTeacherCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
