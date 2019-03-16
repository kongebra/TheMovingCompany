import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { Order } from '../order';
import { CustomerService } from 'src/app/customer/customer.service';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.scss']
})
export class AllOrdersComponent implements OnInit {
  constructor(
		private orderService: OrderService,
		private customerService: CustomerService,
	) {}

	orders: Order[] = [];

	ngOnInit() {
		this.getOrders();
	}

	getOrders() {
		this.orderService.getOrders().subscribe(orders => {
			this.orders = orders;
		}, err => console.error(err), () => {
			this.orders.forEach(order => {
				this.customerService.getCustomer(order.customerId).subscribe(customer => {
					order.customer = customer;
				}, err => console.error(err), () => {});
			});
		});
	}
}
