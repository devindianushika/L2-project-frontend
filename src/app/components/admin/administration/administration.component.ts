import { Component,Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StudentRegisterFormComponent } from '../registration/student-register-form/student-register-form.component';
import { stringify } from 'querystring';
import { TeacherRegisterFormPartAComponent } from '../registration/teacher-register-form-part-a/teacher-register-form-part-a.component';
import { Teacher } from 'src/app/modules/Teacher';
import { RegistrationtypesformComponent } from '../registration/registrationtypesform/registrationtypesform.component';
import { AddnewoptionsComponent } from '../addNew/addnewoptions/addnewoptions.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent  {

  constructor(public dialog : MatDialog,private router : Router) { 
   }

  
  onRegistrationClick() : void {
    const dialogRef = this.dialog.open(RegistrationtypesformComponent, {
      width: '400px',
      height:'300px',
      
      disableClose : false
    });

  }

  
  
  onAddNewItems() {
    const dialogRef = this.dialog.open(AddnewoptionsComponent, {
      width: '300px',
      disableClose : false
    });
  }

  onAssign () {
    this.router.navigate(["/subjectandteacher"]);
  }

}


