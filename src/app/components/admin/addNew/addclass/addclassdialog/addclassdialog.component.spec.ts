import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddclassdialogComponent } from './addclassdialog.component';

describe('AddclassdialogComponent', () => {
  let component: AddclassdialogComponent;
  let fixture: ComponentFixture<AddclassdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddclassdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddclassdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
