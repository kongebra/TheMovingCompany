import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { OrderService } from 'src/app/order/order.service';
import { Customer } from '../customer';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/order/order';

@Component({
	selector: 'app-single-customer',
	templateUrl: './single-customer.component.html',
	styleUrls: ['./single-customer.component.scss']
})
export class SingleCustomerComponent implements OnInit {
	constructor(
		private customerService: CustomerService,
		private orderService: OrderService,
		private route: ActivatedRoute,
	) {}
	
	customer: Customer;

	ngOnInit() {
		let id = this.route.snapshot.params.id
		this.getCustomer(id);
	}

	getCustomer(id) {
		this.customerService.getCustomer(id).subscribe(customer => this.customer = customer, err => console.error(err), () => {
			this.getOrders();
		});
	}

	getOrders() {
		let orders: Order[];
		this.orderService.getOrders().subscribe(o => orders = o, err => console.error(err), () => {
			this.customer.orders = orders.filter(e => {
				return e.customerId == this.customer.id;
			});
		});
	}

}
