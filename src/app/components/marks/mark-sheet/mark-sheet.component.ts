import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { MatBottomSheetRef } from '@angular/material';
export interface PeriodicElement {
  registrationNumber: string;
  position: number;
  fullName: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, registrationNumber: '', fullName: ''},

];
@Component({
  selector: 'app-mark-sheet',
  templateUrl: './mark-sheet.component.html',
  styleUrls: ['./mark-sheet.component.css']
})
export class MarkSheetComponent {

  displayedColumns: string[] = ['position', 'registrationNumber', 'fullName', 'marks'];
  dataSource = ELEMENT_DATA;

 isClick: boolean = true;
  
  proceed(): void
  {
    this.isClick=false;
  }
  
}

