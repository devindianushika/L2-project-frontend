import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ErrorStateMatcher , ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { ToastrModule } from 'ngx-toastr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatToolbarModule,
MatButtonModule,
MatIconModule,
MatProgressSpinnerModule,
MatButtonToggleModule,
MatFormFieldModule,
MatOptionModule,
MatSelectModule,
MatInputModule,
MatCheckboxModule,
MatSidenavModule,
MatMenuModule,
MatListModule,
MatDialogModule,
MatDatepickerModule,
MatRadioModule,
MatNativeDateModule,
MatSnackBarModule,
MatCardModule,
MatGridListModule,
MatAutocompleteModule,
MatTableModule,
MatTabsModule,
MatExpansionModule,
MatTreeModule,
MatProgressBarModule
 } from '@angular/material';






import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { JwtInterceptor, ErrorInterceptor } from './auth';
import { BottomBarComponent } from './components/bottom-bar/bottom-bar.component';
import { StudentRegisterFormComponent } from './components/admin/registration/student-register-form/student-register-form.component';
import { ParentRegisterFormComponent } from './components/admin/registration/parent-register-form/parent-register-form.component';
import { AdminRegisterFormComponent } from './components/admin/registration/admin-register-form/admin-register-form.component';
import { AdministrationComponent } from './components/admin/administration/administration.component';
import { StudentRegisterFormPartBComponent } from './components/admin/registration/student-register-form-part-b/student-register-form-part-b.component';
import { TeacherRegisterFormPartAComponent } from './components/admin/registration/teacher-register-form-part-a/teacher-register-form-part-a.component';
import { TeacherRegisterFormPartBComponent } from './components/admin/registration/teacher-register-form-part-b/teacher-register-form-part-b.component';
import { AdminRegisterFormPartBComponent } from './components/admin/registration/admin-register-form-part-b/admin-register-form-part-b.component';
import { ParentRegisterFormPartBComponent } from './components/admin/registration/parent-register-form-part-b/parent-register-form-part-b.component';
import { RegistrationtypesformComponent } from './components/admin/registration/registrationtypesform/registrationtypesform.component';
import { UserProfileComponent } from './components/user-profile/user-profile/user-profile.component';


import { NewsPageComponent } from './components/news/news-page/news-page.component';
import { TempComponent } from './components/temp/temp.component';
import { MarkSheetComponent } from './components/marks/mark-sheet/mark-sheet.component';
import { AttendanceSheetComponent } from './components/attendance/attendance-sheet/attendance-sheet.component';
import { ArticlePageComponent } from './components/article/article-page/article-page.component';
import { ArticlePostComponent } from './components/article/article-post/article-post.component';
import { TeacherClassPageComponent } from './components/teacher/teacher-class-page/teacher-class-page.component';
import { TeacherMainPageComponent  } from './components/teacher/teacher-main-page/teacher-main-page.component';
import { NotificationButtonComponent } from './components/tool-bar/notification-button/notification-button.component';
import { NewsPostComponent } from './components/news/news-post/news-post.component';
import { AddnewoptionsComponent } from './components/admin/addNew/addnewoptions/addnewoptions.component';
import { AddclassComponent  } from './components/admin/addNew/addclass/addclass.component';
import { AddsubjectComponent } from './components/admin/addNew/addsubject/addsubject.component';
import { from } from 'rxjs';
import { NewsUploadFileComponent } from './components/news/news-upload-file/news-upload-file.component';
import { ArticalUploadFileComponent } from './components/article/artical-upload-file/artical-upload-file.component';
import { TeacherCardComponent } from './components/teacher/teacher-card/teacher-card.component';
import { AddclassdialogComponent } from './components/admin/addNew/addclass/addclassdialog/addclassdialog.component';
import { SubjectAndTeacherCardComponent } from './components/admin/assignSubjectsToClass/subject-and-teacher-card/subject-and-teacher-card.component';
import { SubjectAndTeacherFormComponent } from './components/admin/assignSubjectsToClass/subject-and-teacher-form/subject-and-teacher-form.component';
import { AssignNewSubjectComponent } from './components/admin/assignSubjectsToClass/assign-new-subject/assign-new-subject.component';
import { HomeSlideShowComponent } from './components/home-slide-show/home-slide-show.component';

import { PeopleComponent } from './components/people/people.component';
import { ReportGenComponent } from './components/report-gen/report-gen.component';
import { ChartsModule } from 'ng2-charts';
import { HomeItemsComponent } from './components/home-items/home-items.component';
import { AssignComponent } from './components/admin/assign/assign.component';
import { AdminprofileComponent } from './components/people/adminprofile/adminprofile.component';
import { StudentprofileComponent } from './components/people/studentprofile/studentprofile.component';
import { TeacherprofileComponent } from './components/people/teacherprofile/teacherprofile.component';
import { ParentprofileComponent } from './components/people/parentprofile/parentprofile.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { VerificationComponent } from './components/forgotpassword/verification/verification.component';
import { NewpasswordComponent } from './components/forgotpassword/newpassword/newpassword.component';
import { TeachernewsComponent } from './components/news/teachernews/teachernews.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ToolBarComponent,
    DashboardComponent,
    BottomBarComponent,
    StudentRegisterFormComponent,
    ParentRegisterFormComponent,
    AdminRegisterFormComponent,
    AdministrationComponent,
    StudentRegisterFormPartBComponent,
    TeacherRegisterFormPartAComponent,
    TeacherRegisterFormPartBComponent,
    AdminRegisterFormPartBComponent,
    ParentRegisterFormPartBComponent,
    RegistrationtypesformComponent,
    UserProfileComponent,
    NewsPageComponent,
    TempComponent,
    AttendanceSheetComponent,
    ArticlePageComponent,
    ArticlePostComponent,
    MarkSheetComponent,
    TeacherClassPageComponent,
    TeacherMainPageComponent,
    NotificationButtonComponent,
    NewsPostComponent,
    AddsubjectComponent,
    AddnewoptionsComponent,
    AddclassComponent,
    NewsUploadFileComponent,
    ArticalUploadFileComponent,
    TeacherCardComponent,
    AddclassdialogComponent,
    SubjectAndTeacherCardComponent,
    SubjectAndTeacherFormComponent,
    AssignNewSubjectComponent,
    HomeSlideShowComponent,
    PeopleComponent,
    ReportGenComponent,
    HomeItemsComponent,
    AssignComponent,
    AdminprofileComponent,
    StudentprofileComponent,
    TeacherprofileComponent,
    ParentprofileComponent,
    ForgotpasswordComponent,
    VerificationComponent,
    NewpasswordComponent,
    TeachernewsComponent,
    
  ],
  imports: [
    ToastrModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatButtonToggleModule,
    HttpClientModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatMenuModule,
    MatListModule,
    FormsModule,
    MatDialogModule,
    MatDatepickerModule,
    MatRadioModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatCardModule,
    MatGridListModule,
    MatSnackBarModule,
    MatAutocompleteModule,
    MatTableModule,
    MatTabsModule,
    ChartsModule,
    MatExpansionModule,
    MatTreeModule,
    MatProgressBarModule
  ],entryComponents : [
    StudentRegisterFormComponent,
    StudentRegisterFormPartBComponent,
    TeacherRegisterFormPartAComponent,
    TeacherRegisterFormPartBComponent,
    AdminRegisterFormComponent,
    AdminRegisterFormPartBComponent,
    ParentRegisterFormComponent,
    ParentRegisterFormPartBComponent,
    RegistrationtypesformComponent,
    AddsubjectComponent,
    AddnewoptionsComponent,
    AddclassComponent,
    AddclassdialogComponent,
    AssignComponent,
    NewsUploadFileComponent,
    ArticalUploadFileComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
