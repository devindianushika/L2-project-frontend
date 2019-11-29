import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { AppConstants } from '../modules/AppConstants';
import { Subject } from '../modules/Subject';
import { Observable } from 'rxjs';
import { Class } from '../modules/Class';
import { Teacher } from '../modules/Teacher';
import { ClassID } from '../modules/ClassID';
import { SubjectDTO } from '../dto/SubjectDTO';
import { ClassDTO } from '../dto/ClassDTO';
import { TeacherDTO } from '../dto/TeacherDTO';

const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class AddnewService {

  backendurl : string;


  constructor(private http : HttpClient) { 
    this.backendurl = `${AppConstants.BACKEND_URL}${"addnew"}`;
  }

  addSubject(subjectDTO : SubjectDTO) : Observable<SubjectDTO> {
    const url = `${this.backendurl}/${"saveSubject"}`;
    return this.http.post<SubjectDTO>(url,subjectDTO,httpOptions);
  }

  addClass(classDTO : ClassDTO) : Observable<ClassDTO> {
    const url = `${this.backendurl}/${"saveClass"}`;
    return this.http.post<ClassDTO>(url,classDTO,httpOptions);
  }

  classExists(classID : ClassID){
    const url = `${this.backendurl}/${"classExists"}`;
      return this.http.post(url,classID,httpOptions);
  }
  subjectExists(subjectId : string){
    const url = `${this.backendurl}/${"subjectExists?subjectID="}${subjectId}`;
      return this.http.get(url);
  }


  getAllTeachers() : Observable<TeacherDTO[]> {
    const url = `${this.backendurl}/${"getAllTeachers"}`;
    return this.http.get<TeacherDTO[]>(url);
  }

  getClassByID(grade,id,year) : Observable<ClassDTO>{
    return this.http.get<ClassDTO>(`${this.backendurl}${"/getClassByID?grade="}${grade}${"&id="}${id}${"&year="}${year}`);
  }

}
