import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// adding angular material module
import { MaterialModule } from './material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { FoodBeverageComponent } from './food-beverage/food-beverage.component';
import { RestaurantComponent } from './food-beverage/restaurant/restaurant.component';
import { BarsComponent } from './food-beverage/bars/bars.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { WellnessSpaComponent } from './lifestyle/wellness-spa/wellness-spa.component';
import { ResortActivitiesComponent } from './lifestyle/resort-activities/resort-activities.component';
import { ExperiencesComponent } from './lifestyle/experiences/experiences.component';
import { ExcursionsComponent } from './lifestyle/excursions/excursions.component';
import { WeddingsComponent } from './weddings/weddings.component';
import { CustomComponent } from './weddings/custom/custom.component';
import { TraditionalComponent } from './weddings/traditional/traditional.component';
import { CelebrationsComponent } from './celebrations/celebrations.component';
import { OffersComponent } from './offers/offers.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { NavtabsComponent } from './navigation/navtabs/navtabs.component';
import { FooterComponent } from './ui/footer/footer.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { MemoryParamsService } from './memory-params.service';
import { BehaviorSubject } from 'rxjs';
import { ErrorHandlerService } from './services/error-handler.service';
import { DatePipe } from '@angular/common';
import { HotelpanelComponent } from './hoteladmin/hotelpanel/hotelpanel.component';
import { ManageReservComponent } from './hoteladmin/manage-reserv/manage-reserv/manage-reserv.component';
import { CheckResStatusComponent } from './check-res-status/check-res-status/check-res-status.component';
import { StatusResponseComponent } from './check-res-status/check-res-status/status-response/status-response/status-response.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ConfirmDialogComponent } from './popups/confirm-dialog/confirm-dialog.component';
import { ErrorCodeComponent } from './popups/error-code/error-code.component';




@NgModule({
  declarations: [
    AppComponent,
    AccomodationComponent,
    FoodBeverageComponent,
    RestaurantComponent,
    BarsComponent,
    LifestyleComponent,
    WellnessSpaComponent,
    ResortActivitiesComponent,
    ExperiencesComponent,
    ExcursionsComponent,
    WeddingsComponent,
    CustomComponent,
    TraditionalComponent,
    CelebrationsComponent,
    OffersComponent,
    AuthComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    HeaderComponent,
    SidenavListComponent,
    NavtabsComponent,
    FooterComponent,
    HotelpanelComponent,
    ManageReservComponent,
    CheckResStatusComponent,
    StatusResponseComponent,
    NotFoundComponent,
    ConfirmDialogComponent,
    ErrorCodeComponent
  ],
entryComponents:[
  ConfirmDialogComponent,
  ErrorCodeComponent
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    
    
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    })
  ],
  providers: [MemoryParamsService,
       {
         provide:HTTP_INTERCEPTORS,
         useClass:ErrorHandlerService,
         multi:true
       },
       DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
