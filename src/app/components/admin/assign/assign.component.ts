import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatSnackBar, MatDialogRef } from '@angular/material';
import { AssignSubjectsData } from '../interfaces/AssignSubjectsData.interface';
import { AssignService } from 'src/app/services/assign.service';
import { SubjectDTO } from 'src/app/dto/SubjectDTO';
import { TeacherDTO } from 'src/app/dto/TeacherDTO';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
import { ClassSubjectDTO } from 'src/app/dto/ClassSubjectDTO';
import { Class } from 'src/app/modules/Class';
import { ClassDTO } from 'src/app/dto/ClassDTO';

@Component({
  selector: 'app-assign',
  templateUrl: './assign.component.html',
  styleUrls: ['./assign.component.css']
})
export class AssignComponent implements OnInit {

  subjectList : SubjectDTO[];
  teacherList : TeacherDTO[];

  classSubject : ClassSubjectDTO = new ClassSubjectDTO();

  filteredTeachers : Observable<TeacherDTO[]>;
  filteredSubjects : Observable<SubjectDTO[]>;

  subjectCtrl = new FormControl('');
  teacherCtrl = new FormControl('');

  
  constructor(public dialogRef: MatDialogRef<AssignComponent>,@Inject(MAT_DIALOG_DATA) public data : AssignSubjectsData,
  private _snackBar: MatSnackBar,private assignService : AssignService) { 


    console.log("============== " + this.data.classDTO.grade + "  ");

    this.assignService.getAllSubjects().subscribe(x=> {
      this.subjectList = x;
    });

    this.assignService.getAllTeachers().subscribe(x=> {
      this.teacherList = x;
    });

    this.filteredSubjects = this.subjectCtrl.valueChanges.pipe(
      startWith(''),
      map(subject => subject ? this.filterSubjects(subject) : this.subjectList)
    );

    this.filteredTeachers = this.teacherCtrl.valueChanges.pipe(
      startWith(''),
      map(teacher => teacher ? this.filterTeachers(teacher) : this.teacherList)
    );

   }


   private filterSubjects(value: string): SubjectDTO[] {
    const filterValue = value.toLowerCase();
    return this.subjectList.filter(subject => subject.subjectId.toLowerCase().indexOf(filterValue) === 0);
  }

  private filterTeachers(value: string): TeacherDTO[] {
    const filterValue = value.toLowerCase();
    return this.teacherList.filter(teacher => teacher.registrationNumber.toLowerCase().indexOf(filterValue) === 0);
  }


  ngOnInit() {
  }

  assign() {

    

    this.classSubject.aClass = new ClassDTO();
    this.classSubject.aClass = this.data.classDTO;

    console.log(this.classSubject.aClass.location + "==============");
    
    console.log(this.data.subject);
    console.log(this.data.teacher);

    this.classSubject.subject = this.data.subject;
    this.classSubject.teacher  =this.data.teacher;

    this.assignService.existsByClassAndSubject(this.classSubject.aClass.grade,this.classSubject.aClass.id,this.classSubject.aClass.year,this.classSubject.subject.subjectId).subscribe(x=> {
        if(!x){
          this.save();
        }else{
          alert("Already Exists");
        }
    });

    
  }

  save(){
    this.assignService.saveClassSubject(this.classSubject).subscribe(x=> {
      if(x){
        this.dialogRef.close();

        this.openSnackBar("Assign new Subject to the class","");

      }else{
        alert("Assign new subject to class failed!");
      }
    });
  }

  onCancelClick() {
    this.dialogRef.close();
  }




  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });

  }

}
