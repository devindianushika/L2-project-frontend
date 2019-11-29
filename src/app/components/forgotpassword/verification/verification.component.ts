import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {
  isFailed : boolean;

  codeCntrl = new FormControl('');
  code : string;

  regNo : string;

  constructor(private router : ActivatedRoute,
    private route : Router,private authService : AuthenticationService) { 

    this.isFailed = false;

    this.router.queryParams.subscribe(params => {
      this.regNo = params["regNo"];
      console.log(this.regNo + "================= ++++++++++++ ");
    });

  }

  ngOnInit() {
  }

  getErrorMessage(){
    return "Invalid Verification Code";
  }

  onClick(){

    console.log(" =========  " +this.code);

    this.authService.verify(this.code,this.regNo).subscribe(x=> {
      if(x){

        this.route.navigate(['/newPassword'],{queryParams : {regNo : this.regNo , code : this.code}});

        this.isFailed = false;
      }else{
        this.isFailed = true;
      }
    });
  }

}
