import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotelpanel',
  templateUrl: './hotelpanel.component.html',
  styleUrls: ['./hotelpanel.component.scss']
})
export class HotelpanelComponent implements OnInit {

  constructor() { }

  options:PanelOption[]
  

  ngOnInit() {

    this.options=[
      {name:'Reservations',description:'Manage reservations',backgroundUri:'none',color: 'menu-tile' ,active:true ,link:"reservations",icon:'menu_book'},
      {name:'Rooms Availability',description:'Manage rooms, add ,remove',backgroundUri:'none',color: 'menu-2' ,active:false ,link:"../",icon:'king_bed'},
      {name:'Statistics',description:'See popularity statistics',backgroundUri:'none',color: 'menu-2' ,active:false ,link:"../" ,icon:'poll'},
      {name:'Add content',description:'Content management panel',backgroundUri:'none',color: 'menu-tile' , active:false  ,link:"../",icon:'question_answer'}
    ]
  }

}


export interface PanelOption{

  name:string;
  description: string;
  backgroundUri: string;
  color:string;
  active:boolean;
  link:string;
  icon:string;
}