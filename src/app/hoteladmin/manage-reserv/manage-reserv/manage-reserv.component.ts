import { Component, OnInit ,ViewChild} from '@angular/core';
import { Accommodation } from 'src/app/accomodation/accomodation.component';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTabChangeEvent, MatDialog, MatDialogConfig } from '@angular/material';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ConfirmDialogComponent } from 'src/app/popups/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-manage-reserv',
  templateUrl: './manage-reserv.component.html',
  styleUrls: ['./manage-reserv.component.scss']
})
export class ManageReservComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  
  constructor(private http: HttpClient,
    private dialog:MatDialog) { }
  API:string;
  currentReservations:MatTableDataSource<Accommodation>
  activeReservations: MatTableDataSource<Accommodation>
  inactiveReservations: MatTableDataSource<Accommodation>
  showColumns: string[];
  resevationTypes:{label:string,type:MatTableDataSource<Accommodation>,filter:string,buttons:{name:string,color:string}[]}[]
  ngOnInit() {
    this.API=environment.API
    this.activeReservations=new MatTableDataSource();
    this.inactiveReservations=new MatTableDataSource();

    this.http.get(this.API+'reservations/hotel/current',{
      withCredentials: true ,
    })
    .subscribe((response:any)=>{
     console.log(response.inactive);
     this.activeReservations.data=response.active;
     this.inactiveReservations.data=response.inactive;

    })

    this.showColumns=['id','firstName','lastName','phoneNumber','email','validFrom', 'validTo', 'adultsNumber','Actions']

    this.resevationTypes=[
      {label:'Active reservations',type:this.activeReservations,filter:'active',
     buttons:[ {name:'Delete',color:'warn'}]},

      {label: 'Inactive reservations', type:this.inactiveReservations,filter:'inactive',
      buttons:[{name:'Confirm',color:'primary'},
              
               {name:'Delete',color:'warn'}]}
    ]
    this.currentReservations=this.resevationTypes[0].type
  }

  ngAfterViewInit(){
    
    this.activeReservations.paginator=this.paginator
    this.activeReservations.sort=this.sort
  }


  applyFilter(event: Event, type: string){

    console.log('filtering')
    if(type==='active'){
      this.applyActiveFilter(event)
    }
    if(type==='inactive'){
      this.applyInActiveFilter(event)
    }
  }

 private applyActiveFilter(event:Event){
    const filterValue= (event.target as HTMLInputElement).value
    
    this.activeReservations.filter=filterValue.trim().toLowerCase().replace(/\s/g, "")
    console.log(this.activeReservations.filter)
    if(this.activeReservations.paginator){
      this.activeReservations.paginator.firstPage()

  }
}

private  applyInActiveFilter(event:Event){
    const filterValue= (event.target as HTMLInputElement).value
    
    this.inactiveReservations.filter=filterValue.trim().toLowerCase().replace(/\s/g, "")
    console.log(this.inactiveReservations.filter)
    if(this.inactiveReservations.paginator){
      this.inactiveReservations.paginator.firstPage()

  }
}

tabClick(event:MatTabChangeEvent){
 let resType= this.resevationTypes[event.index].filter
  if(resType==='active'){
    this.currentReservations=this.activeReservations
  }
  if(resType==='inactive'){
    this.currentReservations=this.inactiveReservations
  }
  
  console.log(event.tab.textLabel)
}


buttonClick(id:number,buttonFunction:string){

  console.log('Operation :'+buttonFunction +' On element no: '+id)
  switch (buttonFunction){

    case 'Confirm':
      {
        this.confirmReservation(id)
        break;
      }
  
    case 'Delete':{
      this.deleteReservation(id)
      break;
    }
  }
}

confirmReservation(id:number){

  const dialogConfig = new MatDialogConfig()
  dialogConfig.data={
    id:id,
    message:'Do you want to confirm reservation no '+id+'?',
    type:'confirm'
  }
  const dialogRef=this.dialog.open(ConfirmDialogComponent,dialogConfig)
  dialogRef.afterClosed().subscribe(response=>{

    let status= response.status
    const httpParams= new HttpParams()
    .set('reservationId',id.toString())
    if(status){
      this.http.put(this.API+'reservations/confirm',null,{
        params: httpParams,
        withCredentials:true
      })
      .subscribe((response:any)=>{
        this.activeReservations.data=response.active;
        this.inactiveReservations.data=response.inactive;
      })
    }
 
    
    console.log('Reservation no :'+response.id+' confirmed:'+response.status)
  })

}



deleteReservation(id:number){
  const dialogConfig = new MatDialogConfig()
  dialogConfig.data={
    id:id,
    message:'Do you want to delete reservation no '+id+'?',
    type:'delete'
  }
  const dialogRef=this.dialog.open(ConfirmDialogComponent,dialogConfig)
  dialogRef.afterClosed().subscribe(response=>{
    
 
    let status= response.status
    const httpParams= new HttpParams()
    .set('reservationId',id.toString())
    if(status){
      this.http.delete(this.API+'reservations',{
        params: httpParams,
        withCredentials:true
      })
      .subscribe((response:any)=>{
        this.activeReservations.data=response.active;
        this.inactiveReservations.data=response.inactive;
      })
    }
    console.log('Reservation no :'+response.id+' deleted: '  + response.status)
  })
}
}