import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewoptionsComponent } from './addnewoptions.component';

describe('AddnewoptionsComponent', () => {
  let component: AddnewoptionsComponent;
  let fixture: ComponentFixture<AddnewoptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddnewoptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewoptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
