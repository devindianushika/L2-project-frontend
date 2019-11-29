import { Component, OnInit } from '@angular/core';
import { AdminDTO } from 'src/app/dto/AdminDTO';
import { TeacherDTO } from 'src/app/dto/TeacherDTO';
import { StudentDTO } from 'src/app/dto/StudentDTO';
import { ParentDTO } from 'src/app/dto/ParentDTO';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { AppConstants } from 'src/app/modules/AppConstants';
import { startWith, map } from 'rxjs/operators';
import { UsersService } from 'src/app/services/users.service';
import { Admin } from 'src/app/modules/Admin';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {



  adminList : AdminDTO[];
  teacherList : TeacherDTO[];
  studentList : StudentDTO[];
  parentList : ParentDTO[];

   adminSelectedListed : AdminDTO[];
   teacherSelectedListed : TeacherDTO[];
   studentSelectedListed : StudentDTO[];
   parentSelectedListed : ParentDTO[];


  adminCtrl = new FormControl();
  teacherCtrl = new FormControl();
  studentCtrl = new FormControl();
  parentCtrl = new FormControl();

  filteredAdmins: Observable<AdminDTO[]>;
  filteredTeachers: Observable<TeacherDTO[]>;
  filteredStduents: Observable<StudentDTO[]>;
  filteredParents : Observable<ParentDTO[]>;

  emptyAdminsList : boolean;
  emptyTeachersList : boolean;
  emptyStudentsList : boolean;
  emptyParentsList : boolean;

  backendUrl : string;

  constructor(private userService : UsersService) {

    this.backendUrl = AppConstants.BACKEND_URL;
  
  
    this.emptyAdminsList = false;
    this.emptyParentsList = false;
    this.emptyStudentsList = false;
    this.emptyTeachersList = false;
  

    this.userService.getAllAdmins().subscribe(x=> {
        this.adminList = x;
        this.adminSelectedListed = x;
       
    });

    this.userService.getAllParents().subscribe(x=> {
        this.parentList = x;
        this.parentSelectedListed = x;
    });


    this.userService.getAllStudents().subscribe(x=> {
        this.studentList = x;
        this.studentSelectedListed = x;
    });


    this.userService.getAllTeachers().subscribe(x=> {
      this.teacherList = x;
      this.teacherSelectedListed = x;
  });

    this.filteredAdmins = this.adminCtrl.valueChanges
    .pipe(
      startWith(''),
      map(x => x ? this._filterAdmins(x) : this.adminList)
    );

    this.filteredParents = this.parentCtrl.valueChanges
    .pipe(
      startWith(''),
      map(x => x ? this._filterParents(x) : this.parentList)
    );

    this.filteredStduents = this.studentCtrl.valueChanges
    .pipe(
      startWith(''),
      map(x => x ? this._filterStudents(x) : this.studentList)
    );

    this.filteredTeachers = this.teacherCtrl.valueChanges
    .pipe(
      startWith(''),
      map(x => x ? this._filterTeachers(x) : this.teacherList)
    );



   }

  ngOnInit() {
  }


  private _filterAdmins(value: string): AdminDTO[] {
    const filterValue = value.toLowerCase();

    this.emptyAdminsList = false;
    this.adminSelectedListed =  this.adminList.filter(x => x.registrationNumber.toLowerCase().indexOf(filterValue) === 0);

    if(this.adminSelectedListed.length === 0){
      if(value.length > 1)
      this.emptyAdminsList = true;
      else{
        this.adminSelectedListed = this.adminList;
        return this.adminSelectedListed;
      }
        
    }else{
      return this.adminSelectedListed;
    }

  }

  private _filterParents(value: string): ParentDTO[] {
    const filterValue = value.toLowerCase();

    this.parentSelectedListed =  this.parentList.filter(x => x.registrationNumber.toLowerCase().indexOf(filterValue) === 0);
  
    if(this.parentSelectedListed.length === 0){
      if(value.length > 1)
      this.emptyParentsList = true;
      else{
        this.parentSelectedListed = this.parentList;
        return this.parentSelectedListed;
      }
        
    }else{
      return this.parentSelectedListed;
    }
  
  }

  private _filterStudents(value: string): StudentDTO[] {
    const filterValue = value.toLowerCase();

    this.emptyStudentsList = false;
    this.studentSelectedListed =  this.studentList.filter(x => x.registrationNumber.toLowerCase().indexOf(filterValue) === 0);
  

    if(this.studentSelectedListed.length === 0){
      if(value.length > 1)
      this.emptyStudentsList = true;
      else{
        this.studentSelectedListed = this.studentList;
        return this.studentSelectedListed;
      }
        
    }else{
      return this.studentSelectedListed;
    }  
   }

   private _filterTeachers(value: string): TeacherDTO[] {
    const filterValue = value.toLowerCase();

    this.emptyTeachersList = false;
    this.teacherSelectedListed =  this.teacherList.filter(x => x.registrationNumber.toLowerCase().indexOf(filterValue) === 0);
  

    if(this.teacherSelectedListed.length === 0){
      if(value.length > 1)
      this.emptyTeachersList = true;
      else{
        this.teacherSelectedListed = this.teacherList;
        return this.teacherSelectedListed;
      }
        
    }else{
      return this.teacherSelectedListed;
    }

    
  
   }


}
