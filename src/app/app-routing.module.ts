import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccomodationComponent } from './accomodation/accomodation.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { CelebrationsComponent } from './celebrations/celebrations.component';
import { FoodBeverageComponent } from './food-beverage/food-beverage.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { OffersComponent } from './offers/offers.component';
import { WeddingsComponent } from './weddings/weddings.component';
import { HotelpanelComponent } from './hoteladmin/hotelpanel/hotelpanel.component';
import { ManageReservComponent } from './hoteladmin/manage-reserv/manage-reserv/manage-reserv.component';
import { CheckResStatusComponent } from './check-res-status/check-res-status/check-res-status.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';

const routes: Routes = [
  { path: 'accomodation', component: AccomodationComponent },
  { path: 'celebrations', component: CelebrationsComponent },
  { path: 'food-beverage', component: FoodBeverageComponent },
  { path: 'lifestyle', component: LifestyleComponent },
  { path: 'weddings', component: WeddingsComponent },
  { path: 'offers', component: OffersComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {path: 'hoteladmin',component: HotelpanelComponent},
  {path:'hoteladmin/reservations',component:ManageReservComponent},
  
  { path: '', component: HomeComponent },
  {path: 'home',component:HomeComponent},
  {path:'checkstatus',component:CheckResStatusComponent},


  {path:'**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
