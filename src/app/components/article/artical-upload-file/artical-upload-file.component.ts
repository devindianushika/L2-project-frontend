import { Component, Inject } from '@angular/core';
import { HttpEventType, HttpClient } from '@angular/common/http';
import { ImageDTO } from 'src/app/modules/ImageDTO';
import { ArticlesDTO } from 'src/app/dto/ArticlesDTO';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { FilecontrollerService } from 'src/app/services/filecontroller/filecontroller.service';
import { ImageType } from 'src/app/modules/ImageType.enum';
import { ArticlesService } from 'src/app/services/articles.service';
@Component({
  selector: 'app-artical-upload-file',
  templateUrl: './artical-upload-file.component.html',
  styleUrls: ['./artical-upload-file.component.css']
})
export class ArticalUploadFileComponent{

  userType : string;

  base64textString : string;
  imageDTO : ImageDTO = new ImageDTO();

 
  articlesDTO : ArticlesDTO = new ArticlesDTO();


  regNo : string;

    constructor(private authService : AuthenticationService,
    public dialogRef: MatDialogRef<ArticalUploadFileComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ArticlesDTO,private _snackBar : MatSnackBar,
    private fileService : FilecontrollerService,private articlesService : ArticlesService){
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


      if(this.userType === "STUDENT"){

        this.articlesDTO.uploadBy = JSON.parse(JSON.stringify(this.authService.currentUserValue.object));
        this.articlesDTO.description = this.data.description;
        this.articlesDTO.title = this.data.title;
        this.articlesDTO.imageUri = this.data.title.trim() + this.regNo.trim() + ".jpeg";

          this.articlesService.saveArticles(this.articlesDTO).subscribe(x=> {
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
      this.imageDTO.imageType = ImageType.ARTICLES;

     this.fileService.uploadProfileImage(this.imageDTO).subscribe(x=> {
     });
     

  }


  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
  
}
