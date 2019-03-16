import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { EnumToArrayPipe } from './order/enum-to-array.pipe';
import { AllCustomersComponent } from './customer/all-customers/all-customers.component';
import { AllOrdersComponent } from './order/all-orders/all-orders.component';
import { SingleOrderComponent } from './order/single-order/single-order.component';
import { NewOrderComponent } from './order/new-order/new-order.component';
import { UpdateOrderComponent } from './order/update-order/update-order.component';
import { SingleCustomerComponent } from './customer/single-customer/single-customer.component';
import { NewCustomerComponent } from './customer/new-customer/new-customer.component';
import { UpdateCustomerComponent } from './customer/update-customer/update-customer.component';
import { DeleteCustomerComponent } from './customer/delete-customer/delete-customer.component';
import { DeleteOrderComponent } from './order/delete-order/delete-order.component';

@NgModule({
  declarations: [
    AppComponent,
    EnumToArrayPipe,
    AllCustomersComponent,
    AllOrdersComponent,
    SingleOrderComponent,
    NewOrderComponent,
    UpdateOrderComponent,
    SingleCustomerComponent,
    NewCustomerComponent,
    UpdateCustomerComponent,
    DeleteCustomerComponent,
    DeleteOrderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
