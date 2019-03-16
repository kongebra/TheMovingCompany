import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';
import { Customer } from '../customer';

@Component({
	selector: 'app-new-customer',
	templateUrl: './new-customer.component.html',
	styleUrls: ['./new-customer.component.scss']
})
export class NewCustomerComponent implements OnInit {
	constructor(
		private customerService: CustomerService,
		private router: Router,
	) { }

	customer: Customer;

	ngOnInit() {
		this.customer = new Customer();
	}

	postCustomer() {
		this.customerService.postCustomer(this.customer)
			.subscribe(() => { }, err => console.error(err), () => {
			this.router.navigate(['/customers']);
		});
	}

}
