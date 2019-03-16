import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { Order } from '../order';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.scss']
})
export class AllOrdersComponent implements OnInit {
  constructor(private service: OrderService) { }

	orders: Order[] = [];

	ngOnInit() {
		this.getOrders();
	}

	getOrders() {
		this.service.getOrders().subscribe(orders => this.orders = orders);
	}
}
