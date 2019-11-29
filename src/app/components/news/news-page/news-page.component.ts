import { Component, OnInit } from '@angular/core';
import { MatIconRegistry , MatIcon } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { MatDialog } from '@angular/material';
import { TeacherNewsDTO } from 'src/app/dto/TeacherNewsDTO';
import { AdminNewsDTO } from 'src/app/dto/AdminNewsDTO';
import { NewsUploadFileComponent } from '../news-upload-file/news-upload-file.component';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.css']
})
export class NewsPageComponent implements OnInit {

  userType : string;

  teacherNews : TeacherNewsDTO[] = [];
  adminNews : AdminNewsDTO[] = [];
  pendingTeacherNews : TeacherNewsDTO[] = [];

  constructor(private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private newsService : NewsService,private authService : AuthenticationService,private dialog : MatDialog) {this.matIconRegistry.addSvgIcon(
      "add",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../../../assets/icons/add_photo_alternate-24px.svg")
    ); 
  
    this.userType = this.authService.currentUserValue.userType.toString();

      this.newsService.getAllAdminNews().subscribe(x=> {
        this.adminNews = x;
      });

   this.newsService.getAllApproedNews().subscribe(x=> {
      this.teacherNews = x;
   });

   if(this.userType === 'ADMIN'){
     this.newsService.getAllPendingNews().subscribe(x=> {
        this.pendingTeacherNews = x;
     });
   }
      

  
  }

  ngOnInit() {
  }


  onClick(){
    const dialogRef = this.dialog.open(NewsUploadFileComponent, {
      width: '300px',
      disableClose : true,
      data: { teacherNews : this.teacherNews 
    }
    });
  }

  onApproveP(newsDTO : TeacherNewsDTO){
    this.pendingTeacherNews = this.pendingTeacherNews.filter(t => t.id !== newsDTO.id);
    this.teacherNews.push(newsDTO);
  }

  onRejectP(newsDTO : TeacherNewsDTO){
    this.pendingTeacherNews = this.pendingTeacherNews.filter(t => t.id !== newsDTO.id);
  }

  


  
}
