// EventEmmiter and Ouput for openSidenav()
import { Component, OnInit, EventEmitter, Output, OnChanges } from '@angular/core';
import { MemoryParamsService } from 'src/app/memory-params.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements  OnInit{

  @Output() SideNavToggle = new EventEmitter();
  subscription: Subscription

  constructor(private dataService: MemoryParamsService) { }
  username:string;
  language:string;

openSidenav() {
   this.SideNavToggle.emit();
}
  ngOnInit() {
    this.subscription= this.dataService.observableVariables
    .subscribe(element=>{
      console.log(element)
      this.username=localStorage.getItem('username')
      this.language=localStorage.getItem('language')
    })
  }

}
