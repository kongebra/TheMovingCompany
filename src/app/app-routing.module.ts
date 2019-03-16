import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllComponent } from './order/all/all.component';
import { SingleComponent } from './order/single/single.component';
import { NewComponent } from './order/new/new.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/orders',
    pathMatch: 'full'
  },
  {
    path: 'order/:id',
    component: SingleComponent
  },
  {
    path: 'orders',
    component: AllComponent
  },
  {
    path: 'orders/new',
    component: NewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
