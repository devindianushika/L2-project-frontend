import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConstants } from '../modules/AppConstants';
import { AdminNewsDTO } from '../dto/AdminNewsDTO';
import { ArticlesDTO } from '../dto/ArticlesDTO';
import { Observable } from 'rxjs';

const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  backendurl : string;


  constructor(private http : HttpClient) { 
    this.backendurl = `${AppConstants.BACKEND_URL}${"articles"}`;
  }

  saveArticles(articlesDTO : ArticlesDTO) {
    return this.http.post(`${this.backendurl}${"/saveArticle"}`,articlesDTO,httpOptions);
  }

  getAllConfirmedArticles() : Observable<ArticlesDTO[]>{
    return this.http.get<ArticlesDTO[]>(`${this.backendurl}${"/getAllApprovedArticles"}`);
  }

  getAllPendingArticles() : Observable<ArticlesDTO[]>{
    return this.http.get<ArticlesDTO[]>(`${this.backendurl}${"/getAllPendingArticles"}`);
  }

  approveArticle(id,teacherID) {
    return this.http.get(`${this.backendurl}${"/approveArticle?id="}${id}${"&teacherID="}${teacherID}`);
  }

  rejectArticle(id,teacherID){
    return this.http.get(`${this.backendurl}${"/rejectArticle?id="}${id}${"&teacherID="}${teacherID}`);
  }



}
