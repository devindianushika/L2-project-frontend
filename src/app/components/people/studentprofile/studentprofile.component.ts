import { Component, OnInit, Input } from '@angular/core';
import { StudentDTO } from 'src/app/dto/StudentDTO';
import { AppConstants } from 'src/app/modules/AppConstants';

@Component({
  selector: 'app-studentprofile',
  templateUrl: './studentprofile.component.html',
  styleUrls: ['./studentprofile.component.css']
})
export class StudentprofileComponent implements OnInit {

  @Input() studentDTO : StudentDTO;


  registrationNumber : string;
  fullName : string;
  gender : string;
  contactNumber : string;
  address : string;
  birthday : string;

  backendUrl : string;


  imgUrl : string;

  constructor() {

    this.backendUrl = AppConstants.BACKEND_URL;
   }

  ngOnInit() {
    this.registrationNumber = this.studentDTO.registrationNumber;
    this.fullName = this.studentDTO.fullName;
    this.gender = this.studentDTO.gender;
    this.contactNumber = this.studentDTO.contactNumber;
    this.address = this.studentDTO.currentAddress;
    this.birthday = this.studentDTO.birthday;
    this.imgUrl = this.studentDTO.profile_uri;
  }

}
