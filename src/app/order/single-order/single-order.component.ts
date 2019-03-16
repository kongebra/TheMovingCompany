import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { ActivatedRoute } from '@angular/router';
import { Order } from '../order';
import { CustomerService } from 'src/app/customer/customer.service';

@Component({
  selector: 'app-single-order',
  templateUrl: './single-order.component.html',
  styleUrls: ['./single-order.component.scss']
})
export class SingleOrderComponent implements OnInit {
  constructor(
    private orderService: OrderService, 
    private customerService: CustomerService, 
    private route: ActivatedRoute,
    ) {}

  order: Order;

  ngOnInit() {
    let id = this.route.snapshot.params.id
    this.getOrder(id);
  }

  getOrder(id) {
    this.orderService.getOrder(id).subscribe((order) => {
      this.order = order;
    }, (err) => { console.error(err); }, () => {
      this.getCustomer(this.order.customerId);
    });
  }

  getCustomer(id) {
    this.customerService.getCustomer(id).subscribe((customer) => {
      this.order.customer = customer;
    }, (err) => { console.error(err); }, () => {});
  }
}
