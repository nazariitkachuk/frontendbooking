import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-error-code',
  templateUrl: './error-code.component.html',
  styleUrls: ['./error-code.component.scss']
})
export class ErrorCodeComponent implements OnInit {


  code:string;
  message: string;
  constructor(private dialogRef:MatDialogRef<ErrorCodeComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
      console.log(data)
    this.message=data.message
    this.code=data.code
     }

  ngOnInit() {
    
  }


  accept(){
    this.dialogRef.close();
  }

}
