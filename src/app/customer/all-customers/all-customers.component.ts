import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';
import { OrderService } from 'src/app/order/order.service';
import { Order } from 'src/app/order/order';

@Component({
	selector: 'app-all-customers',
	templateUrl: './all-customers.component.html',
	styleUrls: ['./all-customers.component.scss']
})
export class AllCustomersComponent implements OnInit {
	constructor(
		private customerService: CustomerService,
		private orderService: OrderService,
	) { }

	customers: Customer[] = [];

	ngOnInit() {
		this.getCustomers();
		this.getOrders();
	}

	getCustomers() {
		this.customerService.getCustomers().subscribe(customers => this.customers = customers);
	}

	getOrders() {
		let orders: Order[];

		this.orderService.getOrders().subscribe(o => orders = o, err => console.error(err), () => {
			this.customers.forEach(customer => {
				customer.orders = orders;
				customer.orders.filter(e => {
					return e.customerId == customer.id;
				})
			});
		});
	}

}
