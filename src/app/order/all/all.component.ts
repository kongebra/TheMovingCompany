import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { Order } from '../order';

@Component({
	selector: 'app-all',
	templateUrl: './all.component.html',
	styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {
	constructor(private service: OrderService) { }

	orders: Order[] = [];

	ngOnInit() {
		this.getOrders();
	}

	getOrders() {
		this.service.getOrders().subscribe(orders => this.orders = orders);
	}

}
