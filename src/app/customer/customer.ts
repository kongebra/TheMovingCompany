import { Order } from '../order/order';

export class Customer {
    id: number
    name: string
    email: string
    phone: string
    orders: Order[]
}
