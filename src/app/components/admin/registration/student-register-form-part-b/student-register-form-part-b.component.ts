import { Component, OnInit ,Inject } from '@angular/core';
import { StudentDialogData } from '../../interfaces/StudentDialogData.interface';
import { MAT_DIALOG_DATA , MatDialogRef, MatDialog, MatSnackBar } from '@angular/material';
import { MatIconRegistry , MatIcon } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Student } from 'src/app/modules/Student';
import { FormControl, Validators, ValidatorFn ,AbstractControl , FormGroupDirective , NgForm } from '@angular/forms';
import { RegistrationService } from 'src/app/services/registration/registration.service';
import { Observable } from 'rxjs';
import { Parent } from 'src/app/modules/Parent';
import { map, startWith } from 'rxjs/operators';
import { ParentRegisterFormComponent } from '../parent-register-form/parent-register-form.component';
import { StudentDTO } from 'src/app/dto/StudentDTO';
import { ParentDTO } from 'src/app/dto/ParentDTO';


@Component({
  selector: 'app-student-register-form-part-b',
  templateUrl: './student-register-form-part-b.component.html',
  styleUrls: ['./student-register-form-part-b.component.css']
})
export class StudentRegisterFormPartBComponent  implements OnInit {

  hide : boolean = true;

  student : StudentDTO = new StudentDTO();
  filteredParents : Observable<ParentDTO[]>;
  parents : ParentDTO[];

  parent : ParentDTO = new ParentDTO();

  isGenderValid : boolean;
  isPasswordValid : boolean;
  isContactNumberValid : boolean;
  isParentAdded : boolean;
  isRegistrationFailed : boolean;

  contactNumber = new FormControl('',[this.contactNumberInvalid()]);
  password = new FormControl('',[this.passwordInvalid()]);
  gender = new FormControl('',[this.genderInvalid()]);
  parentCtrl = new FormControl('',[this.checkParent()]);

  constructor(
    public dialogRef: MatDialogRef<StudentRegisterFormPartBComponent>,
    @Inject(MAT_DIALOG_DATA) public data: StudentDialogData,private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,private registerService : RegistrationService,
    public dialog : MatDialog, private _snackBar : MatSnackBar) {

    //  this.data.student.parent = new ParentDTO();
    
    
    

      this.matIconRegistry.addSvgIcon(
        "hide",
        this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/hide_24dp.svg")
      ).
      addSvgIcon(
        "show",
        this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/show_24dp.svg")
      );


      this.hide = true;

      // validation
      this.isContactNumberValid = true;
      this.isPasswordValid = true;
      this.isGenderValid = true;
      this.isParentAdded = false;
      this.isRegistrationFailed = false;

      this.registerService.getAllParents().subscribe(x=> {
          this.parents = x;
          console.log(this.parents);
      });

      

      this.filteredParents = this.parentCtrl.valueChanges.pipe(
        startWith(''),
        map(parent => parent ? this._filterStates(parent) : this.parents)
      );


    }

    onCancelClick(){
      this.dialogRef.close();
    }

  ngOnInit(){

  }

  private _filterStates(value: string): ParentDTO[] {
    const filterValue = value.toLowerCase();
    return this.parents.filter(parent => parent.registrationNumber.toLowerCase().indexOf(filterValue) === 0);
  }

  getData() : void {
    
    console.log(this.data);

    this.student.registrationNumber = this.data.student.registrationNumber;
    this.student.fullName = this.data.student.fullName;
    this.student.currentAddress = this.data.student.currentAddress;
    this.student.birthday = this.data.student.birthday;
    this.student.password = this.data.student.password;
    this.student.contactNumber = this.data.student.contactNumber;
    this.student.gender = this.data.student.gender;
    this.student.parent = this._filterStates(this.data.parent.registrationNumber)[0];
    
    console.log("===================" + this.student.parent.address);
   

    if(this.isContactNumberValid  && this.isGenderValid && this.isPasswordValid && this.student.parent){ 
      console.log(this.data);

      this.registerService.parentExistsA(this.student.parent.registrationNumber).subscribe(x=> {
          if(Boolean(x)){
            this.student.registrationNumber = `${"S"}${this.student.registrationNumber}`;


            this.registerService.registerStudent(this.student).subscribe(x=> {
                console.log(x);
                if(x != null){
                  this.isRegistrationFailed = true;
                  this.openSnackBar("Added new student to school","");
                }else{
                  this.isRegistrationFailed = false;
                  this.openSnackBar("Student registration failed!. Try again ...","");
                }
                this.dialogRef.close();
    
            });
          }else{
             alert("Please add a parent");
          }
      });
    }

  }

  openParentRegistrationDialog(){
    console.log(this.dialogRef.getState());
    const dialogRef = this.dialog.open(ParentRegisterFormComponent, {
      width: '350px',
      disableClose : true,
      data: { parent : this.parent
    }
    });
  }

  // error messages
  

  getGenderInvalidErrorMessage(){
    return "Cannot be empty"
  }

  getContactNumberInvalidErrorMessage(){
    return "Cannot be empty"
  }

  getPasswordInvalidErrorMessage(){
    return "Cannot be empty"
  }


  contactNumberInvalid() {
    return (control: AbstractControl): { [key: string]: boolean } | null =>{
      if (control.value !== "" && control.value) {
        this.isContactNumberValid = true;
          return null;
      }else{
        this.isContactNumberValid = false;
        return {'contactNumberInvalid': true};
      }
    };
    }


    genderInvalid() {
      return (control: AbstractControl): { [key: string]: boolean } | null =>{
        if (control.value !== "" && control.value) {
          this.isGenderValid = true;
            return null;
        }else{
          this.isGenderValid = false;
          return {'genderInvalid': true};
        }
      };
      }

      passwordInvalid() {
        return (control: AbstractControl): { [key: string]: boolean } | null =>{
          if (control.value !== "" && control.value) {
            this.isPasswordValid = true;
              return null;
          }else{
            this.isPasswordValid = false;
            return {'passwordInvalid': true};
          }
        };
        }     


        checkParent() {
          return (control: AbstractControl): { [key: string]: boolean } | null =>{
            if (control.value) {
              this.isParentAdded = true;
              return {'isAddParentDisabled': true};
            }else{
              this.isParentAdded = false;
              return {'isAddParentDisabled': false};
            }
          };
          }    


          openSnackBar(message: string, action: string) {
            this._snackBar.open(message, action, {
              duration: 2000,
            });
        
          }


       


}
