import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Accommodation } from 'src/app/accomodation/accomodation.component';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-check-res-status',
  templateUrl: './check-res-status.component.html',
  styleUrls: ['./check-res-status.component.scss']
})
export class CheckResStatusComponent implements OnInit {

  API:string;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.API=environment.API
  }

  checked:boolean=false;

  reservationData:Accommodation

  reservationNo=new FormControl('',[Validators.nullValidator])
  email = new FormControl('',[Validators.nullValidator])
  checkStatus(){
    
    console.log('Check status')
    
    let email=this.email.value
    let resid=this.reservationNo.value
    console.log('email: '+email+' resid: '+resid)

    let httpparams = new HttpParams()
    .set('email',email)
    .set('reservationId',resid)

    this.http.get<Accommodation>(this.API+'reservations/details/byemail',{params:httpparams})
    .subscribe(result=>{
      
      this.reservationData=result;
      this.checked=true;
      console.log('check----')
      console.log(result)
    })
  }


}
