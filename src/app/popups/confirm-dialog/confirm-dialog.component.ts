import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {

  message:string;
  id:number;
  type:string;


  constructor(private dialogRef:MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data) {

      this.message=data.message
      this.id=data.id
      this.type=data.type
     }

  ngOnInit() {
  }

  cancel(){

    this.dialogRef.close({id:this.id,status:false})
  }

  confirm(){


  this.dialogRef.close({id:this.id,status:true})
  }

}
