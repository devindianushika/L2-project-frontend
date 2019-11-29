import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticalUploadFileComponent } from './artical-upload-file.component';

describe('ArticalUploadFileComponent', () => {
  let component: ArticalUploadFileComponent;
  let fixture: ComponentFixture<ArticalUploadFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticalUploadFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticalUploadFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
