import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './customer';

@Injectable({
    providedIn: 'root'
})

export class CustomerService {
    // TODO (Svein): Edit this to /api/customers before production
    url = 'https://localhost:5001/api/customers';

    constructor(private http: HttpClient) { }

    getCustomers(): Observable<Customer[]> {
        return this.http.get<Customer[]>(this.url);
    }

    getCustomer(id: number): Observable<Customer> {
        return this.http.get<Customer>(this.url + `/${id}`);
    }

    postCustomer(customer: Customer): Observable<any> {
        return this.http.post(this.url, customer);
    }

    putCustomer(id: number, customer: Customer): Observable<any> {
        return this.http.put(this.url + `/${id}`, customer);
    }

    deleteCustomer(id: number): Observable<any> {
        return this.http.delete(this.url + `/${id}`);
    }
}
