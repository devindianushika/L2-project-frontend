import { Component, OnInit, Input } from '@angular/core';
import { ParentDTO } from 'src/app/dto/ParentDTO';
import { AppComponent } from 'src/app/app.component';
import { AppConstants } from 'src/app/modules/AppConstants';
import { UsersService } from 'src/app/services/users.service';
import { StudentDTO } from 'src/app/dto/StudentDTO';

@Component({
  selector: 'app-parentprofile',
  templateUrl: './parentprofile.component.html',
  styleUrls: ['./parentprofile.component.css']
})
export class ParentprofileComponent implements OnInit {

  @Input() parentDTO : ParentDTO;

  backendUrl : string;

  registrationNumber : string;
  fullName : string;
  email : string;
  gender : string;
  contactNumber : string;
  address : string;
  

  imgUrl : string;

  myChildren : StudentDTO[] = [];

  constructor(private userService : UsersService) { 


    this.backendUrl = AppConstants.BACKEND_URL;

  }

  ngOnInit() {
    
    this.registrationNumber = this.parentDTO.registrationNumber;
    this.fullName = this.parentDTO.fullName;
    this.email = this.parentDTO.email;
    this.gender = this.parentDTO.gender;
    this.contactNumber = this.parentDTO.contactNumber;
    this.address = this.parentDTO.address;
    this.imgUrl = this.parentDTO.profile_uri;


    this.userService.getStudentsByParent(this.registrationNumber).subscribe(x=> {
        console.log("My Children " + x);
        this.myChildren = x;
    });
  }

}
