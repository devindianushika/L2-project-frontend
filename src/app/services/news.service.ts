import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AppConstants } from '../modules/AppConstants';
import { AdminNewsDTO } from '../dto/AdminNewsDTO';
import { Observable } from 'rxjs';
import { TeacherNewsDTO } from '../dto/TeacherNewsDTO';


const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  backendurl : string;


  constructor(private http : HttpClient) { 
    this.backendurl = `${AppConstants.BACKEND_URL}`;
  }

  saveAdminNews(adminNewsDTO : AdminNewsDTO) {
    return this.http.post(`${this.backendurl}${"adminNews/saveAdminNews"}`,adminNewsDTO,httpOptions);
  }

  getAllAdminNews() : Observable<AdminNewsDTO[]> {
    return this.http.get<AdminNewsDTO[]>(`${this.backendurl}${"adminNews/getAllAdminNews"}`);
  }


  saveTeacherNews(teacherNewsDTO : TeacherNewsDTO) {
    return this.http.post(`${this.backendurl}${"teacherNews/saveTeacherNews"}`,teacherNewsDTO,httpOptions);
  }


  getAllPendingNews() : Observable<TeacherNewsDTO[]> {
    return this.http.get<TeacherNewsDTO[]>(`${this.backendurl}${"teacherNews/getAllPendingNews"}`);
  }

  getAllApproedNews() :  Observable<TeacherNewsDTO[]> {
    return this.http.get<TeacherNewsDTO[]>(`${this.backendurl}${"teacherNews/getAllApprovedNews"}`)
  }

  approveNews(id : number,adminID: string)  {
    return this.http.get(`${this.backendurl}${"teacherNews/approveTeacherNews?id="}${id}${"&adminID="}${adminID}`);
  }

  rejectNews(id : number,adminID : string) {
    return this.http.get(`${this.backendurl}${"teacherNews/rejectTeacherNews?id="}${id}${"&adminID="}${adminID}`);
  }

}
