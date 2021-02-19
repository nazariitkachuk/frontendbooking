import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MemoryParamsService  {

  constructor() {

    this.roleSerivicesMap=new Map()
    this.roleSerivicesMap.set("ROLE_HOTEL",["HOTEL_ADMIN"])
    this.roleSerivicesMap.set("ROLE_ADMIN",["WEBSITE_ADMIN"])
    this.roleSerivicesMap.set("ROLE_USER",["USER_PANEL"])
  }

  roleSerivicesMap:Map<string,string[]>

  someItem='value';
   observableVariables= new BehaviorSubject(this.someItem);

   

  setItem(key:string, value:string) {


    localStorage.setItem(key,value)
    this.observableVariables.next('new')
    
  }
  removeItem(key:string){
    localStorage.delete(key)
    this.observableVariables.next('removed')
    
  }
  clearMemory(){
    localStorage.clear()
    this.observableVariables.next('empty')
  }

   getItem(key:string) : string {

    return localStorage.get(key)
  }

  setRoles(key:string, roles:string[]){
   localStorage.setItem('roles',roles.toString())

   let servicesToActivate=new Array<string>()
   roles.forEach(e=>{
     this.roleSerivicesMap.get(e).forEach(f=>servicesToActivate.push(f))
   })
   localStorage.setItem('services',servicesToActivate.toString())
   this.observableVariables.next('services')
  }
  getServices():string[]{
    let services=localStorage.getItem('services')
    if(services==null){
      return null
    }
  return  services.split(',');
  }

}
