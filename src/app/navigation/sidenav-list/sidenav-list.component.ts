import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { MemoryParamsService } from 'src/app/memory-params.service';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit {
  // add the new eventemitter

  services:string[]
  subscription:Subscription
  @Output()
  closeSideNav = new EventEmitter();

  constructor(private dataService:MemoryParamsService) {}

  ngOnInit() {
    this.services=this.dataService.getServices()
    
    this.subscription=this.dataService.observableVariables.subscribe(s=>{

      this.services=this.dataService.getServices()
 //     console.log('sidenav : '+this.services)
    })
  }

  // method
  onToggleClose() {
    this.closeSideNav.emit();
  }

  isActive(serviceName:string):boolean{
 //   console.log('service is actice: ',serviceName)
    if(this.services==null){
      return false
    }
   // console.log('service is actice: ',this.services.includes(serviceName))
  return  this.services.includes(serviceName)
  }
}
