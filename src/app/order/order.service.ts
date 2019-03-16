import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from './order';

@Injectable({
  providedIn: 'root'
})

export class OrderService {
  // TODO (Svein): Edit this to /api/orders before production
  url = 'https://localhost:5001/api/orders';

  constructor(private http: HttpClient) {}

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.url);
  }

  getOrder(id): Observable<Order> {
    return this.http.get<Order>(this.url + '/' + id);
  }

  postOrder(order: Order): Observable<any> {
    return this.http.post(this.url, order);
  }

  putOrder(id, order: Order): Observable<any> {
    return this.http.put(this.url + '/' + id, order);
  }

  deleteOrder(id): Observable<any> {
    return this.http.delete(this.url + '/' + id);
  }
}
