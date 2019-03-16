import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { Router } from '@angular/router';
import { Order } from '../order';
import { Customer } from 'src/app/customer/customer';
import { Eservice } from '../eservice.enum';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.scss']
})
export class NewOrderComponent implements OnInit {
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
