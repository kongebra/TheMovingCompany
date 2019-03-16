import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.scss']
})
export class DeleteCustomerComponent implements OnInit {
  constructor(
    private customerService: CustomerService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.deleteCustomer(id);
  }

  deleteCustomer(id) {
    this.customerService.deleteCustomer(id)
      .subscribe(() => {}, err => console.error(err), () => {
        this.router.navigate(['/customers'])
    })
  }

}
