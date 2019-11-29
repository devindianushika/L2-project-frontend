import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachernewsComponent } from './teachernews.component';

describe('TeachernewsComponent', () => {
  let component: TeachernewsComponent;
  let fixture: ComponentFixture<TeachernewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachernewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachernewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
