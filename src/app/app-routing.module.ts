import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllOrdersComponent } from './order/all-orders/all-orders.component';
import { NewOrderComponent } from './order/new-order/new-order.component';
import { AllCustomersComponent } from './customer/all-customers/all-customers.component';
import { SingleOrderComponent } from './order/single-order/single-order.component';
import { NewCustomerComponent } from './customer/new-customer/new-customer.component';
import { SingleCustomerComponent } from './customer/single-customer/single-customer.component';
import { DeleteOrderComponent } from './order/delete-order/delete-order.component';
import { UpdateOrderComponent } from './order/update-order/update-order.component';
import { UpdateCustomerComponent } from './customer/update-customer/update-customer.component';
import { DeleteCustomerComponent } from './customer/delete-customer/delete-customer.component';

const routes: Routes = [
	{ path: '', redirectTo: '/orders', pathMatch: 'full' },

	{ path: 'orders', component: AllOrdersComponent },
	{ path: 'orders/new', component: NewOrderComponent },
	{ path: 'orders/view/:id', component: SingleOrderComponent },
	{ path: 'orders/update/:id', component: UpdateOrderComponent },
	{ path: 'orders/delete/:id', component: DeleteOrderComponent },

	{ path: 'customers', component: AllCustomersComponent },
	{ path: 'customers/new', component: NewCustomerComponent },
	{ path: 'customers/view/:id', component: SingleCustomerComponent	},
	{ path: 'customers/update/:id', component: UpdateCustomerComponent },
	{ path: 'customers/delete/:id', component: DeleteCustomerComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
