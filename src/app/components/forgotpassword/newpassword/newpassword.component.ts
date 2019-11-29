import { Component, OnInit } from '@angular/core';
import { FormControl, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-newpassword',
  templateUrl: './newpassword.component.html',
  styleUrls: ['./newpassword.component.css']
})
export class NewpasswordComponent implements OnInit {


  reEnterNewPassword : string;
  newPassword : string;

  newPasswordCntrl = new FormControl('');
  reEnterPasswordCntrl = new FormControl('',[this.passwordsDidnotMatch()]);

  regNo : string;
  code : string;

  isFailed : boolean;
  idPasswordMatch : boolean;

  constructor(private router : ActivatedRoute,
    private route : Router,private authService : AuthenticationService) {

    this.isFailed = false;
    this.idPasswordMatch = true;

    this.router.queryParams.subscribe(params => {
      this.regNo = params["regNo"];
      this.code = params["code"];
      console.log(this.regNo + "================= ++++++++++++ " + this.code);
    });
  }

  ngOnInit() {
  }

  onClick(){
    if(this.idPasswordMatch){

      console.log(this.newPassword + " =================== ");

        this.authService.newPassword(this.newPassword,this.regNo,this.code).subscribe(x=> {
            if(x){
              
              this.isFailed = false;

              this.route.navigate(['/login']);

            }else{
              this.isFailed = true;
            }
        });
    }
  }

  getErrorMessage(){
    return "Reset password failed";
  }

  getPasswordDontMatchMsg(){
    return "Password didn't match";
  }


  passwordsDidnotMatch(){
    return (control: AbstractControl): { [key: string]: boolean } | null =>{
      if (control.value === this.newPassword) {
        this.idPasswordMatch = true;
        return null;
      }else{
        this.idPasswordMatch = false;
        return { 'passwordValid': true };
      }
    };
  }

}
