import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { MemoryParamsService } from 'src/app/memory-params.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient,
    private router : Router,
    private dataService: MemoryParamsService) { }

  username: string;
  password: string ;
  api: string;
  failed:boolean;

 
  ngOnInit() {
    this.api=environment.API
    this.failed=false
  }

  login(){

    console.log('username: '+this.username)
    console.log('password: '+this.password)
  
    let headers= new HttpHeaders()
    
    this.http.post<{username:string,language:string,roles:string[]}>(this.api+'users/login',{
      username:this.username,
      password:this.password
    },{
      withCredentials: true 
    }).subscribe(res=>{
      console.log(res)
      console.log(res.language)
      this.failed=false
      this.dataService.setItem("username",res.username);
      this.dataService.setItem("language",res.language);
      this.dataService.setRoles("roles",res.roles)
      this.dataService.setItem("isLoggedIn",'true');
      this.router.navigate(['']);
    },
    error=>{
    
        this.failed=true
        
      
    })
    

  }
// {responseType: 'text'}
}

