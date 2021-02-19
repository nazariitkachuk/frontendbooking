import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ObservableMedia } from '@angular/flex-layout';

@Component({
  selector: 'app-food-beverage',
  templateUrl: './food-beverage.component.html',
  styleUrls: ['./food-beverage.component.scss']
})
export class FoodBeverageComponent implements OnInit {

  // constructor(private http: HttpClient) { 
  //   this.API=environment.API
  // }
  constructor(private observableMedia: ObservableMedia) { }
  //API=''
  
  
  
  
  ngOnInit() {
    // const param= new HttpParams();
    // param.set('userId','1')
    // this.http.get(this.API+'users/userinfo',{
    //   params:param,
    //   withCredentials: true 
    // })
    // .subscribe(response=>{

    //   console.log(response)
    // })
  }

}
