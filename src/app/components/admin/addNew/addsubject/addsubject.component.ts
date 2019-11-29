import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import { Subject } from 'src/app/modules/Subject';
import { AddnewService } from 'src/app/services/addnew.service';

@Component({
  selector: 'app-addsubject',
  templateUrl: './addsubject.component.html',
  styleUrls: ['./addsubject.component.css']
})
export class AddsubjectComponent implements OnInit {

  subject : Subject = new Subject();

  
  constructor(public dialogRef: MatDialogRef<AddsubjectComponent>,
    @Inject(MAT_DIALOG_DATA) public data : Subject,private addNewService : AddnewService,
    private _snackBar : MatSnackBar) { }

  ngOnInit() {
  }

  onAdd() {
    this.subject.subjectId = this.data.subjectId;
    this.subject.name = this.data.name;

    console.log(this.subject.subjectId);
    console.log(this.subject.name);

    this.addNewService.subjectExists(this.subject.subjectId).subscribe(x=> {
      if(!Boolean(x)){
        this.addNewService.addSubject(this.subject).subscribe(x=> {
          if(x !== null){
            this.dialogRef.close();
            this.openSnackBar("Add new subject succesfully!","");
          }else{
            this.openSnackBar("Add new subject failed!","");
          }
      });
      }else{
        alert("Already exists!");
      }
    });
}


  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });

  }

}
