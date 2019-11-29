import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsUploadFileComponent } from './news-upload-file.component';

describe('NewsUploadFileComponent', () => {
  let component: NewsUploadFileComponent;
  let fixture: ComponentFixture<NewsUploadFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsUploadFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsUploadFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
