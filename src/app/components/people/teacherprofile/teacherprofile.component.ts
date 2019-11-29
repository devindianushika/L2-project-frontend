import { Component, OnInit, Input } from '@angular/core';
import { TeacherDTO } from 'src/app/dto/TeacherDTO';
import { AppConstants } from 'src/app/modules/AppConstants';

@Component({
  selector: 'app-teacherprofile',
  templateUrl: './teacherprofile.component.html',
  styleUrls: ['./teacherprofile.component.css']
})
export class TeacherprofileComponent implements OnInit {


  @Input() teacherDTO : TeacherDTO;

  registrationNumber : string;
  fullName : string;
  email : string;
  gender : string;
  contactNumber : string;

  backendUrl : string;

  imgUrl : string;
  
  constructor() { 

    this.backendUrl = AppConstants.BACKEND_URL;


    

  }

  ngOnInit() {

    this.registrationNumber = this.teacherDTO.registrationNumber;
    this.fullName = this.teacherDTO.fullName;
    this.gender = this.teacherDTO.gender;
    this.contactNumber = this.teacherDTO.contactNumber;
    this.email = this.teacherDTO.email;
    this.imgUrl = this.teacherDTO.profile_uri;
  }

}
