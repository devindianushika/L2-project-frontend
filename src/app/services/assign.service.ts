import { Injectable } from '@angular/core';
import { AppConstants } from '../modules/AppConstants';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SubjectDTO } from '../dto/SubjectDTO';
import { TeacherDTO } from '../dto/TeacherDTO';
import { ClassSubjectDTO } from '../dto/ClassSubjectDTO';


const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AssignService {

  backendurl : string;

  constructor(private http : HttpClient) { 
    this.backendurl = `${AppConstants.BACKEND_URL}${"adminassign"}`;
  }

  getAllSubjects() : Observable<SubjectDTO[]> {
    return this.http.get<SubjectDTO[]>(`${this.backendurl}${"/getAllSubjects"}`);
  }

  getAllTeachers() : Observable<TeacherDTO[]> {
    return this.http.get<TeacherDTO[]>(`${this.backendurl}${"/getAllTeachers"}`);
  }


  getAllSubjectClassByID(garde,id,year) : Observable<ClassSubjectDTO[]> {
    return this.http.get<ClassSubjectDTO[]>(`${this.backendurl}${"/getClassSubjectsByID?grade="}${garde}${"&id="}${id}${"&year="}${year}`);
  }

  saveClassSubject(clasSubjectDTO : ClassSubjectDTO)  {
    return this.http.post(`${this.backendurl}${"/saveClassSubject"}`,clasSubjectDTO,httpOptions);
  }

  existsByClassAndSubject(grade,id,year,subjectID) {
    return this.http.get(`${this.backendurl}${"/classSubjectExists?grade="}${grade}${"&id="}${id}${"&year="}${year}${"&subjectID="}${subjectID}`);
  }

}
