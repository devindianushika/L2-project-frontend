import { Component, OnInit, Inject } from '@angular/core';
import { HttpEventType, HttpClient } from '@angular/common/http';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { News } from '../News.interface';
import { AdminNewsDTO } from 'src/app/dto/AdminNewsDTO';
import { TeacherNewsDTO } from 'src/app/dto/TeacherNewsDTO';
import { ImageDTO } from 'src/app/modules/ImageDTO';
import { FilecontrollerService } from 'src/app/services/filecontroller/filecontroller.service';
import { NewsService } from 'src/app/services/news.service';
import { ImageType } from 'src/app/modules/ImageType.enum';
import { AdminDTO } from 'src/app/dto/AdminDTO';

@Component({
  selector: 'app-news-upload-file',
  templateUrl: './news-upload-file.component.html',
  styleUrls: ['./news-upload-file.component.css']
})
export class NewsUploadFileComponent {

  userType : string;

  base64textString : string;
  imageDTO : ImageDTO = new ImageDTO();

  adminNewsDTO : AdminNewsDTO = new AdminNewsDTO();
  teacherNewsDTO : TeacherNewsDTO = new TeacherNewsDTO();


  regNo : string;

    constructor(private authService : AuthenticationService,
    public dialogRef: MatDialogRef<NewsUploadFileComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TeacherNewsDTO,private _snackBar : MatSnackBar,
    private fileService : FilecontrollerService,private newsService : NewsService){
      this.userType = this.authService.currentUserValue.userType.toString();

      this.regNo = this.authService.currentUserValue.object["registrationNumber"];
    console.log(this.regNo + " ================== ");
    
    }

  ngOnInit() {

  }

  onPost(){
    console.log(this.data.title + " ============ ");

    if(this.base64textString != null){
      this.onSubmit();
    }


      if(this.userType === "ADMIN"){

        this.adminNewsDTO.adminDTO = JSON.parse(JSON.stringify(this.authService.currentUserValue.object));
        this.adminNewsDTO.description = this.data.description;
        this.adminNewsDTO.title = this.data.title;
        this.adminNewsDTO.profile_uri = this.data.title.trim() + this.regNo.trim() + ".jpeg";

          this.newsService.saveAdminNews(this.adminNewsDTO).subscribe(x=> {
              if(x){
                this.dialogRef.close();
                  this.openSnackBar("Add news successfully","");
              }else{
                alert("Add news failed!");
              }
          });

      }else{

        this.teacherNewsDTO.teacher = JSON.parse(JSON.stringify(this.authService.currentUserValue.object));
        this.teacherNewsDTO.description = this.data.description;
        this.teacherNewsDTO.title = this.data.title;
        this.teacherNewsDTO.profile_uri = this.data.title.trim() + this.regNo.trim() + ".jpeg";

          this.newsService.saveTeacherNews(this.teacherNewsDTO).subscribe(x=> {
              if(x){
                this.dialogRef.close();
                  this.openSnackBar("Add news successfully","");
              }else{
                alert("Add news failed!");
              }
          });

      }




  }

  onCancelClcik(){
    this.dialogRef.close();
  }


  file : File = null;
  fileData: File = null;
  previewUrl:any = null;
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;
  
  fileProgress(fileInput: any) {
      this.fileData = <File>fileInput.target.files[0];
      this.file = this.fileData;

      if (this.file) {
        var reader = new FileReader();

        reader.onload =this._handleReaderLoaded.bind(this);

        reader.readAsBinaryString(this.file);
    }

      this.preview();
  }
 
  preview() {
    // Show preview 
    var mimeType = this.fileData.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
 
    var reader = new FileReader();      
    reader.readAsDataURL(this.fileData); 
    reader.onload = (_event) => { 
      this.previewUrl = reader.result; 
    }

   
  }


  _handleReaderLoaded(readerEvt) {
    var binaryString = readerEvt.target.result;
           this.base64textString= btoa(binaryString);
          
   }
   
  onSubmit() {
        
      this.imageDTO.file = this.base64textString;
      this.imageDTO.fileName = this.data.title.trim() + this.regNo.trim() + ".jpeg";
      this.imageDTO.imageType = ImageType.NEWS;

     this.fileService.uploadProfileImage(this.imageDTO).subscribe(x=> {
     });
     

  }


  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }


}
