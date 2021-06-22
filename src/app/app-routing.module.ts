import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurdComponent } from './components/curd/curd.component';
import { HomeComponent } from './components/home/home.component';
import { OrdersComponent } from './components/orders/orders.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'orders' , component:OrdersComponent},
  {path:'crud' , component:CurdComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
