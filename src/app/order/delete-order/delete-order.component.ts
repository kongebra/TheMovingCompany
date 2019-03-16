import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-order',
  templateUrl: './delete-order.component.html',
  styleUrls: ['./delete-order.component.scss']
})
export class DeleteOrderComponent implements OnInit {
  constructor(private service: OrderService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.deleteOrder(parseInt(id));
  }

  deleteOrder(id: number) {
    this.service.deleteOrder(id).subscribe(() => {

    }, err => console.error(err), () => {
      this.router.navigate(['/']);
    });
  }

}
