import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllOrdersComponent } from './order/all-orders/all-orders.component';
import { NewOrderComponent } from './order/new-order/new-order.component';
import { AllCustomersComponent } from './customer/all-customers/all-customers.component';
import { SingleOrderComponent } from './order/single-order/single-order.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/orders',
    pathMatch: 'full'
  },
  {
    path: 'order/:id',
    component: SingleOrderComponent
  },
  {
    path: 'orders',
    component: AllOrdersComponent
  },
  {
    path: 'orders/new',
    component: NewOrderComponent
  },

  {
    path: 'customers',
    component: AllCustomersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
