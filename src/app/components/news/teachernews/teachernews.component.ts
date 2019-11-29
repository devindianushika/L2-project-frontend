import { Component, OnInit, Input, Output , EventEmitter } from '@angular/core';
import { TeacherNewsDTO } from 'src/app/dto/TeacherNewsDTO';
import { AdminDTO } from 'src/app/dto/AdminDTO';
import { AppConstants } from 'src/app/modules/AppConstants';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { MatSnackBar } from '@angular/material';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-teachernews',
  templateUrl: './teachernews.component.html',
  styleUrls: ['./teachernews.component.css']
})
export class TeachernewsComponent implements OnInit {

  @Input() teacherNewsDTO : TeacherNewsDTO;

  name : string;
  profie : string;
  date : string;
  title : string;
  description : string;
  imgUrl : string;
  admin : string;


  isApproved : boolean = false;

  backendUrl : string;

  userType : string;

  adminDTO : AdminDTO = new AdminDTO();
  adminID : string;
  

  @Output() onApproveP :EventEmitter<TeacherNewsDTO> = new EventEmitter();
  @Output() onRejectP  : EventEmitter<TeacherNewsDTO> = new EventEmitter();

  constructor(private authService : AuthenticationService,private _snackBar : MatSnackBar,
    private newsService :  NewsService) {

    this.backendUrl = AppConstants.BACKEND_URL;
    this.userType = this.authService.currentUserValue.userType.toString();

    this.adminDTO = JSON.parse(JSON.stringify(this.authService.currentUserValue.object));
  
    this.adminID = this.adminDTO.registrationNumber;
  
  }

  ngOnInit() {
    this.name = this.teacherNewsDTO.teacher.fullName;
    this.profie = this.teacherNewsDTO.teacher.profile_uri;
    this.date = this.teacherNewsDTO.date;
    this.title = this.teacherNewsDTO.title;
    this.description = this.teacherNewsDTO.description;
    this.imgUrl = this.teacherNewsDTO.profile_uri;

    if(this.teacherNewsDTO.approvedBy){
        this.isApproved = true;
        this.admin = this.teacherNewsDTO.approvedBy.fullName;
      
    }else{
      this.isApproved = false;
    }

  
  }

  onApprove(newsDTO){

    console.log("============ ______________ " + this.adminID);

    this.newsService.approveNews(this.teacherNewsDTO.id,this.adminID).subscribe(x=> {
      if(x){
        this.onApproveP.emit(this.teacherNewsDTO);
        this.openSnackBar("Approved News","");
      }else{

      }
    });
    
    
  }

  onReject(newsDTO){
    this.newsService.rejectNews(this.teacherNewsDTO.id,this.adminID).subscribe(x=> {
      if(x){
        this.onRejectP.emit(this.teacherNewsDTO);
        this.openSnackBar("Rejected News","");
      }else{

      }
    });
    
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
