import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { Class } from 'src/app/modules/Class';
import { Teacher } from 'src/app/modules/Teacher';
import { AddnewService } from 'src/app/services/addnew.service';
import { ClassID } from 'src/app/modules/ClassID';
import { ClassData } from '../addnewoptions/addnewoptions.component';
import { ClassDTO } from 'src/app/dto/ClassDTO';
import { TeacherDTO } from 'src/app/dto/TeacherDTO';

@Component({
  selector: 'app-addclass',
  templateUrl: './addclass.component.html',
  styleUrls: ['./addclass.component.css']
})
export class AddclassComponent implements OnInit {

  class1 : ClassDTO = new ClassDTO();

  teacherList : TeacherDTO[];

  constructor( public dialogRef: MatDialogRef<AddclassComponent>,
    @Inject(MAT_DIALOG_DATA) public data : ClassData ,private addNewService : AddnewService,
    private _snackBar : MatSnackBar) { 

      this.addNewService.getAllTeachers().subscribe(x=> {
          this.teacherList = x;
      });


    }

  ngOnInit() {
  }

  onAdd() {
  
    this.class1.grade = this.data.grade;
     this.class1.id =  this.data.id;
     this.class1.year = this.data.year;
    this.class1.location = this.data.location;
    this.class1.medium = this.data.medium;
    this.class1.stream = this.data.stream;
    this.class1.teacher = new TeacherDTO();
    this.class1.teacher.registrationNumber = this.data.classTeacher;
    

    console.log(this.class1);

    this.addNewService.classExists(this.class1).subscribe(x=> {
      if(!Boolean(x)){
        this.addNewService.addClass(this.class1).subscribe(x=> {
          
          if(x !== null){
            this.dialogRef.close();
            this.openSnackBar("Add class successfully!","");
          }else{
            this.openSnackBar("Add class failed!","");
          }
        });
      }else{
        alert("Already exists");
      }
    })
  }




  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });

  }




}
