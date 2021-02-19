import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { catchError,tap} from 'rxjs/operators';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ErrorCodeComponent } from '../popups/error-code/error-code.component';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService implements HttpInterceptor {

  constructor( private dialog:MatDialog) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(req)
    const dialogConfig = new MatDialogConfig()

    return next.handle(req)
    .pipe(tap(
      event=>{
        if(event instanceof HttpResponse){
          console.log('Response is ok')
        }
      },
      error=>{
        switch(error.status){

          case 400:{
            
            dialogConfig.data={
              code:error.status,
              message: 'Bad Request:  '+ error.error.message
              
             }
            break;
          }
          
          case 404:{
            dialogConfig.data={
              code:error.status,
              message: 'Data not found:  '+ error.error.message
              
             }
            break;
          }
          default:{
            dialogConfig.data={
              code:error.status,
              message:'Backend returned error  with message : '+error.message
              
             }
             break;
          }

          
        }
      
       
      
       let  ref=this.dialog.open(ErrorCodeComponent,dialogConfig)
       console.log(error)
        console.log(error.status)
        console.log(error.message)
      }
    )
    )
  }
}
