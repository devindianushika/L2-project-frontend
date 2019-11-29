import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherMainPageComponent } from './teacher-main-page.component';

describe('TeacherMainPageComponent', () => {
  let component: TeacherMainPageComponent;
  let fixture: ComponentFixture<TeacherMainPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherMainPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
