import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material';
import { AddsubjectComponent } from '../addsubject/addsubject.component';
import { Subject } from 'src/app/modules/Subject';
import { AddclassComponent } from '../addclass/addclass.component';
import { Class } from 'src/app/modules/Class';
import { ClassID } from 'src/app/modules/ClassID';


export interface ClassData {
  grade : string;
  id : string;
  year : string;
  location: string;
    medium: string;
    stream: string;
    classTeacher: string;
} 

@Component({
  selector: 'app-addnewoptions',
  templateUrl: './addnewoptions.component.html',
  styleUrls: ['./addnewoptions.component.css']
})
export class AddnewoptionsComponent implements OnInit {

  subject : Subject = new Subject();
  classData : ClassData;
  


  constructor(public dialogRef: MatDialogRef<AddnewoptionsComponent>,
    public dialog : MatDialog) { 
      // this.class.classID = new ClassID();
    }

  ngOnInit() {
  }

  onAddSubject() {
    this.dialogRef.close();
    const dialogRef = this.dialog.open(AddsubjectComponent, {
      width: '300px',
      disableClose : false,
      data : {subject : this.subject}
    });
  }

  onAddClass(){
    this.dialogRef.close();
    const dialogRef = this.dialog.open(AddclassComponent, {
      width: '300px',
      disableClose : false,
      data : {classData : this.classData}
    });
  }
  

}
