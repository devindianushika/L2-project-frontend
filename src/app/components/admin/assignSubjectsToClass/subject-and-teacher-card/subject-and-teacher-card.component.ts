import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  
  subjectId: string;
  name: string;
  registrationNumber: string;
  fullName: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {subjectId: '', name:'', registrationNumber: '', fullName: ''},

];
@Component({
  selector: 'app-subject-and-teacher-card',
  templateUrl: './subject-and-teacher-card.component.html',
  styleUrls: ['./subject-and-teacher-card.component.css']
})
export class SubjectAndTeacherCardComponent {

  
  displayedColumns: string[] = ['subjectId', 'name', 'registrationNumber', 'fullName'];
  dataSource = ELEMENT_DATA;
}
