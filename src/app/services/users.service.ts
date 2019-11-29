import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from '../modules/AppConstants';
import { AdminDTO } from '../dto/AdminDTO';
import { Observable } from 'rxjs';
import { TeacherDTO } from '../dto/TeacherDTO';
import { ParentDTO } from '../dto/ParentDTO';
import { StudentDTO } from '../dto/StudentDTO';

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  backendurl : string;


  constructor(private http : HttpClient) { 
    this.backendurl = `${AppConstants.BACKEND_URL}${"people"}`;
  }

  getAllAdmins() : Observable<AdminDTO[]>{
    return this.http.get<AdminDTO[]>(`${this.backendurl}${"/getAllAdmins"}`);
  }


  getAllTeachers() : Observable<TeacherDTO[]>{
    return this.http.get<TeacherDTO[]>(`${this.backendurl}${"/getAllTeachers"}`);
  }


  getAllParents() : Observable<ParentDTO[]>{
    return this.http.get<ParentDTO[]>(`${this.backendurl}${"/getAllParents"}`);
  }

  getAllStudents() : Observable<StudentDTO[]>{
    return this.http.get<StudentDTO[]>(`${this.backendurl}${"/getAllStudents"}`);
  }

  getStudentsByParent(regNo) : Observable<StudentDTO[]> {
    return this.http.get<StudentDTO[]>(`${this.backendurl}${"/getChildren?regNo="}${regNo.trim()}`);
  }



}
