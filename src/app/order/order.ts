import { Eservice } from './eservice.enum';
import { Customer } from '../customer/customer';

export class Order {
    id: number
    addressFrom: string
    addressTo: string
    dueDate: string
    created: string
    service: Eservice
    note: string
    customerId: number
    customer: Customer
}
