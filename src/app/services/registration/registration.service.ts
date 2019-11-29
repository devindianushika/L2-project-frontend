import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Teacher } from 'src/app/modules/Teacher';
import { AppConstants } from 'src/app/modules/AppConstants';
import { FormControl, Validators, ValidatorFn ,AbstractControl , FormGroupDirective , NgForm } from '@angular/forms';
import { Admin } from 'src/app/modules/Admin';
import { Student } from 'src/app/modules/Student';
import { Parent } from 'src/app/modules/Parent';
import { TeacherDTO } from 'src/app/dto/TeacherDTO';
import { AdminDTO } from 'src/app/dto/AdminDTO';
import { StudentDTO } from 'src/app/dto/StudentDTO';
import { ParentDTO } from 'src/app/dto/ParentDTO';

const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  backendurl : string;

  private teacherExistsVal : boolean;

  private teacherExistsArr : BehaviorSubject<boolean>;

  constructor(private http : HttpClient) { 
    this.backendurl = `${AppConstants.BACKEND_URL}${"registration"}`;
    this.teacherExistsArr = new BehaviorSubject<boolean>(false);
    this.teacherExistsVal = false;
  }

  registerTeacher(teacherDTO : TeacherDTO) : Observable<TeacherDTO> {
    teacherDTO.profile_uri = `${teacherDTO.fullName}${teacherDTO.gender}${teacherDTO.registrationNumber}${".jpeg"}`;
    const url = `${this.backendurl}/${"registerTeacher"}`;
    return this.http.post<TeacherDTO>(url,teacherDTO,httpOptions);
  }

  teacherExists(registrationNumber : string)  {
    const url = `${this.backendurl}/${"teacherExists?registrationNumber=T"}${registrationNumber}`;
      return this.http.get(url);
  }

  registerAdmin(adminDTO : AdminDTO) : Observable<AdminDTO> {
    adminDTO.profile_uri = `${adminDTO.fullName}${adminDTO.gender}${adminDTO.registrationNumber}${".jpeg"}`;
    const url = `${this.backendurl}/${"registerAdmin"}`;
    return this.http.post<AdminDTO>(url,adminDTO,httpOptions);
  }


  adminExists(registrationNumber : string)  {
    
    const url = `${this.backendurl}/${"adminExists?registrationNumber=A"}${registrationNumber}`;
      return this.http.get(url);
  }

  registerStudent(studentDTO : StudentDTO) : Observable<StudentDTO> {
    studentDTO.profile_uri = `${studentDTO.fullName}${studentDTO.gender}${studentDTO.registrationNumber}${".jpeg"}`;
    const url = `${this.backendurl}/${"registerStudent"}`;
    return this.http.post<StudentDTO>(url,studentDTO,httpOptions);
  }


  studentExists(registrationNumber : string)  {
    const url = `${this.backendurl}/${"studentExists?registrationNumber=S"}${registrationNumber}`;
      return this.http.get(url);
  }

  registerParent(parentDTO : ParentDTO) : Observable<ParentDTO> {
    parentDTO.profile_uri = `${parentDTO.fullName}${parentDTO.gender}${parentDTO.registrationNumber}${" .jpeg"}`;
    const url = `${this.backendurl}/${"registerParent"}`;
    return this.http.post<ParentDTO>(url,parentDTO,httpOptions);
  }

  parentExists(registrationNumber : string)  {
    const url = `${this.backendurl}/${"parentExists?registrationNumber=P"}${registrationNumber}`;
      return this.http.get(url);
  }

  parentExistsA(registrationNumber : string)  {
    const url = `${this.backendurl}/${"parentExists?registrationNumber="}${registrationNumber}`;
      return this.http.get(url);
  }

  getAllParents() : Observable<ParentDTO[]>{
    const url = `${this.backendurl}/${"getAllParents"}`;
      return this.http.get<ParentDTO[]>(url);
  }
}
