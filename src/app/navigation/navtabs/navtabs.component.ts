import { Component, OnInit } from '@angular/core';
import { MemoryParamsService } from 'src/app/memory-params.service';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-navtabs',
  templateUrl: './navtabs.component.html',
  styleUrls: ['./navtabs.component.scss']
})
export class NavtabsComponent implements OnInit {

  private API:string;
  constructor(private memoryService: MemoryParamsService,
    private http: HttpClient) { }

  subscription: Subscription
  isLoggedIn:boolean=false;

  ngOnInit() {
    this.API=environment.API
    this.subscription= this.memoryService.observableVariables.subscribe(sub=>{

      this.isLoggedIn=localStorage.getItem('isLoggedIn')==='true'?true:false;

    })
  }

  logout(){

    this.memoryService.clearMemory();
    this.http.post(this.API+'users/logout','',{
      withCredentials: true ,
      responseType: 'text'
    }).subscribe();
    console.log('Successfully logged out')
  }


}
