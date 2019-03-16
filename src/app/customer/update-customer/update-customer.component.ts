import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Customer } from '../customer';

@Component({
	selector: 'app-update-customer',
	templateUrl: './update-customer.component.html',
	styleUrls: ['./update-customer.component.scss']
})
export class UpdateCustomerComponent implements OnInit {
	constructor(
		private customerService: CustomerService,
		private route: ActivatedRoute,
		private router: Router
	) { }

	id: string;
	customer: Customer;

	ngOnInit() {
		this.id = this.route.snapshot.params.id
		this.getCustomer(this.id);
	}

	getCustomer(id) {
		this.customerService.getCustomer(id)
			.subscribe(customer => this.customer = customer, err => console.error(err), () => {

		});
	}

	putCustomer() {
		this.customerService.putCustomer(this.id, this.customer)
			.subscribe(() => {}, err => console.error(err), () => {
			this.router.navigate(['/customers']);
		});
	}

}
