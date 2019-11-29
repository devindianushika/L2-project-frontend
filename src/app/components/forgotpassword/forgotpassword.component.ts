import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {


  regNoCntrl = new FormControl('');
  regNo : string;

  isFailed : boolean;

  constructor(private authService : AuthenticationService,private router : Router) { 
    this.isFailed = false;
   }

  ngOnInit() {
  }

  getErrorMessage(){
    return "Invalid Registration Number";
  }

  onClick(){
    console.log(this.regNo + " ==================== ");

    this.authService.forgot(this.regNo.trim()).subscribe(x=> {
      if(x){
        // redirect to next page
        this.isFailed = false;
        alert("Success ........... ");


        this.router.navigate(["/verify"],{queryParams : {regNo : this.regNo }});

      }else{
        this.isFailed = true;
      }
    });
  }

}
