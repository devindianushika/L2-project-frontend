import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSlideShowComponent } from './home-slide-show.component';

describe('HomeSlideShowComponent', () => {
  let component: HomeSlideShowComponent;
  let fixture: ComponentFixture<HomeSlideShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSlideShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSlideShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
