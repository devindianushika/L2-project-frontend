import { Component, OnInit } from '@angular/core';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { AssignComponent } from '../../assign/assign.component';
import { TeacherDTO } from 'src/app/dto/TeacherDTO';
import { SubjectDTO } from 'src/app/dto/SubjectDTO';
import { AssignService } from 'src/app/services/assign.service';
import { ClassSubjectDTO } from 'src/app/dto/ClassSubjectDTO';
import { AddnewService } from 'src/app/services/addnew.service';
import { ClassID } from 'src/app/modules/ClassID';
import { ClassDTO } from 'src/app/dto/ClassDTO';
import { TableData } from '../TableData';



@Component({
  selector: 'app-subject-and-teacher-form',
  templateUrl: './subject-and-teacher-form.component.html',
  styleUrls: ['./subject-and-teacher-form.component.css']
})
export class SubjectAndTeacherFormComponent implements OnInit {


  tableDataList : TableData[] = [];
  tableData : TableData;

  dataSource = new MatTableDataSource();

  id : string;
  year : string;
  grade : string;

  disabled : boolean;
  classId : ClassID = new ClassID();
  classDTO : ClassDTO = new ClassDTO();

  displayedColumns: string[] = ['subjectID','subjectName' ,'teacherID' ,'teacherName'];

  constructor(private dialog : MatDialog,
    private assignService : AssignService,private addnewService : AddnewService) {

      this.disabled = true;
     }
    classSubjectList : ClassSubjectDTO[];
  subject : SubjectDTO = new SubjectDTO();
  teacher : TeacherDTO = new TeacherDTO();

  ngOnInit() {
  }

  onGoToSubjectList(){

    // this.dataSource = new MatTableDataSource();

    this.dataSource = new MatTableDataSource();
    this.tableDataList = [];

    if((this.year || this.year !== "") && (this.grade || this.grade !== "") && (this.id || this.id !== "")){

       this.classId.grade = this.grade;
       this.classId.id = this.id;
       this.classId.year = this.year;

      this.addnewService.classExists(this.classId).subscribe(x=> {
        if(x){

            this.addnewService.getClassByID(this.grade,this.id,this.year).subscribe(x=> {
              this.classDTO = x;
              console.log("Class DTO ======== " + x.grade + " " + x.medium);
            });

          this.assignService.getAllSubjectClassByID(this.grade,this.id,this.year).subscribe(x=> {
            this.classSubjectList = x;
            console.log(x);
           // this.disabled = true;

           

            for(let i=0;i<this.classSubjectList.length;i++){
              console.log(" **************** " + this.classSubjectList[i].id);
              this.tableData = new TableData(this.classSubjectList[i].subject.subjectId,
                this.classSubjectList[i].subject.name,  this.classSubjectList[i].teacher.registrationNumber,
                this.classSubjectList[i].teacher.fullName );
             
              this.tableDataList.push(this.tableData);
              console.log("T ======== " + this.tableData);
            }
            this.dataSource = new MatTableDataSource(this.tableDataList);
            console.log(this.tableDataList);

        });

        }else{
          this.disabled = false;
          alert("class is not existing!");
        }
      });

    }else{
      this.disabled = false;
      alert("Please enter data!");
    }
  }

  onAssignNewSubject() {

    this.addnewService.classExists(this.classId).subscribe(x=> {
      if(x){
        const dialogRef = this.dialog.open(AssignComponent, {
          width: '400px',
          height:'300px',
          disableClose : false,
          data : {
            subject : this.subject, teacher : this.teacher , classDTO : this.classDTO
          }
        });
      }else{
        alert("Class not existing!");
      }
    });
  }

}
