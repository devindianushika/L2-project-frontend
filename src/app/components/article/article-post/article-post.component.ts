import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ArticlesDTO } from 'src/app/dto/ArticlesDTO';
import { AppConstants } from 'src/app/modules/AppConstants';
import { ArticlesService } from 'src/app/services/articles.service';
import { MatSnackBar } from '@angular/material';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { TeacherDTO } from 'src/app/dto/TeacherDTO';
import { Teacher } from 'src/app/modules/Teacher';

@Component({
  selector: 'app-article-post',
  templateUrl: './article-post.component.html',
  styleUrls: ['./article-post.component.css']
})
export class ArticlePostComponent implements OnInit {
 
  @Input() articleDTO : ArticlesDTO;


  studentName : string;
  stduentPorfile : string;
  date : string;
  approvedBy : string = null;
  title : string;
  description : string;
  imgUrl : string;

  backendUrl : string;

  isApproved : boolean;

  userType : string;


  
  @Output() onRejectP : EventEmitter<ArticlesDTO> = new EventEmitter();
 
  @Output() onApproveP : EventEmitter<ArticlesDTO> = new EventEmitter();
  

  teacherID : string;
  teacherDTO :TeacherDTO = new TeacherDTO();

  constructor(private articleService : ArticlesService,
    private _snackBar : MatSnackBar,private authService : AuthenticationService) {

     this.userType =  this.authService.currentUserValue.userType.toString();

   this.teacherDTO =   JSON.parse(JSON.stringify(this.authService.currentUserValue.object));
      this.teacherID = this.teacherDTO.registrationNumber;

     }

  ngOnInit() {

    this.isApproved = false;
    this.studentName = this.articleDTO.uploadBy.fullName;
    this.stduentPorfile = this.articleDTO.uploadBy.profile_uri;
    this.date = this.articleDTO.date;
    if(this.articleDTO.teacher){
      this.approvedBy = this.articleDTO.teacher.fullName;
    }
    
    this.title = this.articleDTO.title;
    this.description = this.articleDTO.description;
    this.imgUrl = this.articleDTO.imageUri;

    if(this.approvedBy){
      this.isApproved = true;
    }else{
      this.isApproved = false;
    }

    this.backendUrl = AppConstants.BACKEND_URL;
  }


  onReject(articleDTO){
    this.articleService.rejectArticle(this.articleDTO.id,this.teacherID).subscribe(x=> {
      if(x){
        this.openSnackBar("Rejected Article","");
        this.onRejectP.emit(this.articleDTO);
      }else{

      }
    })
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  onApprove(articleDTO){
    this.articleService.approveArticle(this.articleDTO.id,this.teacherID).subscribe(x=> {
      if(x){
        this.openSnackBar("Approved Article","");
        this.onApproveP.emit(this.articleDTO);
      }else{

      }
    });
  }

}
