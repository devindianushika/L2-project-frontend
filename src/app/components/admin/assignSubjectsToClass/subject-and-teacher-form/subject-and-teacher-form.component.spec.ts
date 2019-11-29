import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectAndTeacherFormComponent } from './subject-and-teacher-form.component';

describe('SubjectAndTeacherFormComponent', () => {
  let component: SubjectAndTeacherFormComponent;
  let fixture: ComponentFixture<SubjectAndTeacherFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectAndTeacherFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectAndTeacherFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
