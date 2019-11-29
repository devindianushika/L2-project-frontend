import { Component, OnInit, Input } from '@angular/core';
import { AdminDTO } from 'src/app/dto/AdminDTO';
import { AppConstants } from 'src/app/modules/AppConstants';

@Component({
  selector: 'app-adminprofile',
  templateUrl: './adminprofile.component.html',
  styleUrls: ['./adminprofile.component.css']
})
export class AdminprofileComponent implements OnInit {

  @Input() adminDTO : AdminDTO;

  backendUrl : string;

  registrationNumber : string;
  fullName : string;
  email : string;
  designation : string;
  gender : string;
  contactNumber : string;

  imgUrl : string;

  constructor() { 

    this.backendUrl = AppConstants.BACKEND_URL;

  
   }

  ngOnInit() {

    this.registrationNumber = this.adminDTO.registrationNumber;
    this.fullName = this.adminDTO.fullName;
    this.email = this.adminDTO.email;
    this.designation = this.adminDTO.destination;
    this.gender = this.adminDTO.gender;
    this.contactNumber = this.adminDTO.contactNumber;
    this.imgUrl = this.adminDTO.profile_uri;
  }

}
