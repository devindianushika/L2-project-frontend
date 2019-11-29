import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './auth';
import { UserProfileComponent } from './components/user-profile/user-profile/user-profile.component';
import { AdministrationComponent } from './components/admin/administration/administration.component';

import { NewsPageComponent } from './components/news/news-page/news-page.component';
import { ArticlePageComponent } from './components/article/article-page/article-page.component';
import { TeacherMainPageComponent } from './components/teacher/teacher-main-page/teacher-main-page.component'
import {MarkSheetComponent} from './components/marks/mark-sheet/mark-sheet.component';
import {AttendanceSheetComponent} from './components/attendance/attendance-sheet/attendance-sheet.component';
import {NewsUploadFileComponent} from './components/news/news-upload-file/news-upload-file.component';
import {ArticalUploadFileComponent} from './components/article/artical-upload-file/artical-upload-file.component';
import {TeacherClassPageComponent} from './components/teacher/teacher-class-page/teacher-class-page.component';
import {SubjectAndTeacherFormComponent} from './components/admin/assignSubjectsToClass/subject-and-teacher-form/subject-and-teacher-form.component'
import {HomeSlideShowComponent} from './components/home-slide-show/home-slide-show.component';
import {TempComponent} from './components/temp/temp.component';

import { PeopleComponent } from './components/people/people.component';
import { ReportGenComponent } from './components/report-gen/report-gen.component';
import {HomeItemsComponent} from './components/home-items/home-items.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { VerificationComponent } from './components/forgotpassword/verification/verification.component';
import { NewpasswordComponent } from './components/forgotpassword/newpassword/newpassword.component';

const routes: Routes = [
  {path : 'login',component : LoginComponent},
  {path : 'forgot',component : ForgotpasswordComponent},
  {path : 'verify',component : VerificationComponent},
  {path : 'newPassword',component : NewpasswordComponent},
  {path : '',component : DashboardComponent, canActivate : [AuthGuard],
children : [
  {path : 'profile',component : UserProfileComponent},
  {path : 'administration',component : AdministrationComponent},
  {path : 'news',component : NewsPageComponent},
  {path : 'article',component : ArticlePageComponent},
  {path : 'teachermain',component : TeacherMainPageComponent},
  {path : 'marksheet',component : MarkSheetComponent},
  {path : 'attendancesheet', component: AttendanceSheetComponent},
  {path : 'uploadnews', component: NewsUploadFileComponent},
  {path : 'uploadarticle', component: ArticalUploadFileComponent},
  {path : 'teacherclass', component: TeacherClassPageComponent},
  {path : 'subjectandteacher', component: SubjectAndTeacherFormComponent},
  {path : 'homeslide', component: HomeSlideShowComponent},
  {path : 'temp', component: TempComponent},
  {path : 'people',component :PeopleComponent},
  {path : 'reportgen',component : ReportGenComponent},
  {path : 'homeitem',component : HomeItemsComponent}
  
]},

  // {path : 'home',component : HomeComponent, canActivate : [AuthGuard]},

  // otherwise redirect to home
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
