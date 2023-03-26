import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MedicineHomeComponent } from './components/medicine-home/medicine-home.component';
import { TopDealsByCategoryComponent } from './components/top-deals-by-category/top-deals-by-category.component';
import { ViewProductDetailsComponent } from './components/view-product-details/view-product-details.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"medicine-home",component:MedicineHomeComponent},
  {path:"top-deals-by-category",component:TopDealsByCategoryComponent},
  {path:"view-product-details/:drugCode",component:ViewProductDetailsComponent},
  {path:"",redirectTo:"/home",pathMatch:"full"},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
