import { Component, OnInit } from '@angular/core';
import { FilecontrollerService } from 'src/app/services/filecontroller/filecontroller.service';
import { ImageDTO } from 'src/app/modules/ImageDTO';
import { stringify } from 'querystring';
import { ImageType } from 'src/app/modules/ImageType.enum';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { UserType } from 'src/app/modules/UserType.enum';
import { Admin } from 'src/app/modules/Admin';
import { Parent } from 'src/app/modules/Parent';
import { Teacher } from 'src/app/modules/Teacher';
import { Student } from 'src/app/modules/Student';
import { FormControl } from '@angular/forms';
import { AppConstants } from 'src/app/modules/AppConstants';
import { RegistrationService } from 'src/app/services/registration/registration.service';
import { AdminDTO } from 'src/app/dto/AdminDTO';
import { StudentDTO } from 'src/app/dto/StudentDTO';
import { ParentDTO } from 'src/app/dto/ParentDTO';
import { TeacherDTO } from 'src/app/dto/TeacherDTO';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  imageUri : string;

  base64textString : string;
  imageDTO : ImageDTO = new ImageDTO();

  user : Object
  userType : UserType;

  admin : AdminDTO;
  student : StudentDTO;
  parent : ParentDTO;
  teacher : TeacherDTO;


  emailS : boolean;
  designationS : boolean;
  addressS : boolean;
  birthdayS : boolean;


  editEmail : boolean;
  editAddress : boolean;
  editContactNumber : boolean;

  // details
  regNo : string;
  email : string;
  fullName : string;
  gender : string;
  contactNumber : string;
  designation : string;
  address : string;
  birthday : string;

  imageType : string;
  imageName : string;

  backendUrl : string;

  emailCntrl  = new FormControl('');
  addressCntrl = new FormControl('');
  contactNumberCntrl = new FormControl('');


  constructor(private fileContoller : FilecontrollerService,private authService : AuthenticationService,
    private registerService : RegistrationService,private _snackBar: MatSnackBar) {
  
      this.backendUrl = AppConstants.BACKEND_URL;

      console.log(this.backendUrl);

    this.emailS = false;
    this.designationS = false;
    this.addressS = false;
    this.birthdayS = false;

    this.editAddress = true;
    this.editContactNumber = true;
    this.editEmail = true;

    

    this.userType = authService.currentUserValue.userType;

    console.log(this.userType);
  

    console.log(this.imageType + " ============= ");

    switch(this.userType.toString()){
      
      case UserType[UserType.ADMIN]:
          this.admin = JSON.parse(JSON.stringify(authService.currentUserValue.object));
          this.designationS = true;
          this.emailS = true;
          this.addressS = false;
          this.birthdayS = false;

          this.imageName = this.admin.profile_uri;
          this.imageType = ImageType[ImageType.PROFILE_ADMIN];

          console.log("============= " + this.admin.profile_uri);

          this.regNo = this.admin.registrationNumber;
          this.fullName = this.admin.fullName;
          this.gender = this.admin.gender;
          this.contactNumber = this.admin.contactNumber;
          this.email = this.admin.email;
          this.designation = this.admin.destination;

          console.log(this.admin.fullName);
        break;
        case UserType[UserType.PARENT]:
            this.parent = JSON.parse(JSON.stringify(authService.currentUserValue.object));
            console.log(this.parent.fullName);
            this.emailS = true;
            this.addressS = true;
            this.designationS  =false;
            this.birthdayS = false;

            this.imageName = this.parent.profile_uri;
            this.imageType = ImageType[ImageType.PROFILE_PARENT];
          this.regNo = this.parent.registrationNumber;
          this.fullName = this.parent.fullName;
          this.gender = this.parent.gender;
          this.contactNumber  = this.parent.contactNumber;
          this.address = this.parent.address;
          this.email = this.parent.email;

            break;
          case UserType[UserType.STUDENT]:
              this.student = JSON.parse(JSON.stringify(authService.currentUserValue.object));
              console.log(this.student.fullName);
              this.birthdayS = true;
              this.addressS = true;
              this.emailS = false;
              this.designationS = false;

              this.imageName = this.student.profile_uri;
              this.imageType = ImageType[ImageType.PROFILE_STUDENT];

                this.regNo = this.student.registrationNumber;
                this.fullName = this.student.fullName;
                this.gender = this.student.gender;
                this.contactNumber = this.student.contactNumber;
                this.birthday = this.student.birthday;
                this.address = this.student.currentAddress;

              break;
            case UserType[UserType.TEACHER]:
                
                this.emailS = true;
                this.designationS = false;
                this.birthdayS = false;
                this.addressS = false;
                this.teacher = JSON.parse(JSON.stringify(authService.currentUserValue.object));
            
                this.imageName = this.teacher.profile_uri;
                this.imageType = ImageType[ImageType.PROFILE_TEACHER];

                this.regNo = this.teacher.registrationNumber;
                this.fullName = this.teacher.fullName;
                this.gender = this.teacher.gender;
                this.contactNumber = this.teacher.contactNumber;
                this.email = this.teacher.email;

                console.log(this.teacher.fullName);
                break;             
    }
   }


   editProfile() {
     console.log("=====================");
    this.editAddress = false;
    this.editContactNumber = false;
    this.editEmail = false;
   }

   updateProfile(){
    


      switch(this.userType.toString()){
      
        case UserType[UserType.ADMIN]:
            this.admin = JSON.parse(JSON.stringify(this.authService.currentUserValue.object));
            this.admin.email = this.email;
            this.admin.contactNumber = this.contactNumber;

            console.log(this.admin.contactNumber);
            console.log(this.contactNumber);



            this.registerService.registerAdmin(this.admin).subscribe(x=> {
              if(x)
                this.openSnackBar("Profile Updated","");
            });


          break;
          case UserType[UserType.PARENT]:
              this.parent = JSON.parse(JSON.stringify(this.authService.currentUserValue.object));
              this.parent.contactNumber = this.contactNumber;
              this.parent.email = this.email;
              this.parent.address = this.address;

              this.registerService.registerParent(this.parent).subscribe(x=> {
                if(x)
                this.openSnackBar("Profile Updated","");
              });

              break;
            case UserType[UserType.STUDENT]:
                this.student = JSON.parse(JSON.stringify(this.authService.currentUserValue.object));
               this.student.currentAddress = this.address;
               this.student.contactNumber = this.contactNumber;

               this.registerService.registerStudent(this.student).subscribe(x=> {
                if(x)
                this.openSnackBar("Profile Updated","");
               });

                break;
              case UserType[UserType.TEACHER]:
              
                  
                  this.teacher = JSON.parse(JSON.stringify(this.authService.currentUserValue.object));
              
                  this.teacher.email = this.email;
                  this.teacher.contactNumber = this.contactNumber;
                  console.log(this.teacher.fullName);


                  this.registerService.registerTeacher(this.teacher).subscribe(x=> {
                    if(x)
                    this.openSnackBar("Profile Updated","");
                  });
                  break;             
      }

if(this.file !== null){
  this.onSubmit();
}
        

   }


  ngOnInit() {
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
        
          console.log("Running =====");

      this.imageDTO.file = this.base64textString;
      

      switch(this.userType.toString()){
      
        case UserType[UserType.ADMIN]:
            this.imageDTO.fileName = this.admin.fullName.trim() + this.admin.gender.trim() + this.admin.registrationNumber.trim() + ".jpeg";
            this.imageDTO.imageType = ImageType.PROFILE_ADMIN;
          break;
          case UserType[UserType.PARENT]:
              this.imageDTO.fileName = this.parent.fullName.trim() + this.parent.gender.trim() + this.parent.registrationNumber.trim() + ".jpeg";
              this.imageDTO.imageType = ImageType.PROFILE_PARENT;
              break;
            case UserType[UserType.STUDENT]:
                this.imageDTO.fileName = this.student.fullName.trim() + this.student.gender.trim() + this.student.registrationNumber.trim() + ".jpeg";
                this.imageDTO.imageType = ImageType.PROFILE_STUDENT;
               break;
              case UserType[UserType.TEACHER]:
                  this.imageDTO.fileName = this.teacher.fullName.trim() + this.teacher.gender.trim() + this.teacher.registrationNumber.trim() + ".jpeg";
                  this.imageDTO.imageType = ImageType.PROFILE_TEACHER;
                  break;             
      }


      console.log(this.imageDTO.fileName + " =============== ");
      console.log(this.imageDTO.imageType.toString());

          this.fileContoller.uploadProfileImage(this.imageDTO).subscribe(x=> {
            if(x){
              alert("File Uploaded!");
            }else{
              alert("Error!");
            }
        });

  }


  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }


}
