import { Eservice } from './eservice.enum';
import { Custsomer } from '../customer/custsomer';

export class Order {
    id: number
    addressFrom: string
    addressTo: string
    dueDate: string
    created: string
    service: Eservice
    note: string
    customerId: number
    customer: Custsomer
}
