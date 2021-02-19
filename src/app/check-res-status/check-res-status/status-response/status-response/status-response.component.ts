import { Component, OnInit, Input, OnChanges, SimpleChanges, Output,EventEmitter } from '@angular/core';
import { Accommodation } from 'src/app/accomodation/accomodation.component';
import { MatTableDataSource } from '@angular/material';
import { stringify } from 'querystring';


@Component({
  selector: 'status-response',
  templateUrl: './status-response.component.html',
  styleUrls: ['./status-response.component.scss']
})
export class StatusResponseComponent implements OnChanges {


  @Input("response") dataResponse:Accommodation;

  @Output("repeat") repeatEmit=new EventEmitter<boolean>()

  statusData:MatTableDataSource<Accommodation[]>
  features:{name:string,value:any}[]

  constructor() { 


  }
  ngOnChanges(changes: SimpleChanges): void {
    
    //this.statusData=new MatTableDataSource(this.dataResponse)
    console.log(changes)
    console.log(this.dataResponse)
    this.features=[
      {name:'Reservation No',value: this.dataResponse.id},
      {name:'Email',value: this.dataResponse.email},
      {name:'Arrival date',value:this.dataResponse.validFrom},
      {name:'Departure date',value:this.dataResponse.validTo},
      {name:'Adults number',value: this.dataResponse.adultsNumber}
    ]
  }

  checkAgain():void{
   console.log('Check again')
   this.repeatEmit.emit(true)
   
 }
}
