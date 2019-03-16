import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';

@Component({
	selector: 'app-all-customers',
	templateUrl: './all-customers.component.html',
	styleUrls: ['./all-customers.component.scss']
})
export class AllCustomersComponent implements OnInit {
	constructor(private customerService: CustomerService) { }

	customers: Customer[] = [];

	ngOnInit() {
		this.getCustomers();
	}

	getCustomers() {
		this.customerService.getCustomers().subscribe(customers => this.customers = customers);
	}

}
