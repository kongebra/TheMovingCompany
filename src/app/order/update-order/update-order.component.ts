import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { CustomerService } from 'src/app/customer/customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from '../order';
import { Customer } from 'src/app/customer/customer';
import { Eservice } from '../eservice.enum';

@Component({
	selector: 'app-update-order',
	templateUrl: './update-order.component.html',
	styleUrls: ['./update-order.component.scss']
})
export class UpdateOrderComponent implements OnInit {
	constructor(
		private orderService: OrderService,
		private customerService: CustomerService,
		private route: ActivatedRoute,
		private router: Router) { }

	id: string;
	order: Order;
	customers: Customer[];
	services = Eservice;

	ngOnInit() {
		this.id = this.route.snapshot.params.id
		this.getOrder(this.id);
		this.getCustomers();
	}

	getOrder(id) {
		this.orderService.getOrder(id).subscribe(order => {
			this.order = order;
		}, err => console.error(err), () => {
			this.getCustomer(this.order.customerId);
		})
	}

	putOrder() {
		this.orderService.putOrder(this.id, this.order).subscribe(() => {

		}, err => console.error(err), () => {
			this.router.navigate(['/orders']);
		});
	}

	getCustomer(id) {
		this.customerService.getCustomer(id).subscribe(customer => {
			this.order.customer = customer;
		});
	}

	getCustomers() {
		this.customerService.getCustomers().subscribe(customers => {
			this.customers = customers;
		})
	}

}
