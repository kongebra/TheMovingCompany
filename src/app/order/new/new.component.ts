import { Component, OnInit, Pipe } from '@angular/core';
import { OrderService } from '../order.service';
import { Order } from '../order';
import { Router, RouterLink } from '@angular/router';
import { Customer } from 'src/app/customer/customer';
import { Eservice } from '../eservice.enum';

@Component({
	selector: 'app-new',
	templateUrl: './new.component.html',
	styleUrls: ['./new.component.scss']
})

export class NewComponent implements OnInit {
	constructor(private orderService: OrderService, private router: Router) { }

	order: Order;
	customers: Customer[] = [];
	services = Eservice

	ngOnInit() {
		this.order = new Order();
		this.customers = [];
	}

	postOrder() {
		this.orderService.postOrder(this.order).subscribe(() => {
			this.router.navigate(['/orders']);
		});
	}

}
