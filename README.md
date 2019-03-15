# The Moving Company

# API Planning
Before starting the programming I want to make a layout of how I wish the REST API to be looking. Starting with the most basic (CRUD) so the sales consultant can see all orders, specific orders, update them, and delete them.

## Requests
### API Information
#### `GET` /api
Returns information about the API
#### Response example
```json
{
    "uptime": "PnYnMnDTnHnMnS",
    "info": "Service for The Moving Company",
    "version": "v1"
}
```

### Get All Orders
#### `GET` /api/orders
Returns an array of ID's for `Order` objects.
#### Response example
```json
[
    432,
    433,
    435
]
```
### Get Order
#### `GET` /api/orders/{order.id}
Returns a single `Order` object
#### Response example
```json
{
    "id": 432,
    "customer": {
        "name": "Kari Hansen",
        "phone": "+47 99 88 77 66",
        "email": "kari@hansen.no"
    },
    "address": {
        "from": "Østre Kullerød 4, 3241 Sandefjord",
        "to": "Teknologivegen 22, 2815 Gjøvik"
    },
    "service": "MOVING",
    "date": {
        "created": "2019-03-15T20:06:11Z",
        "delivery": "2019-03-15T20:06:11Z"
    },
    "note": "Lorem ipsum"
}
```
### Add Order
#### `POST` /api/orders
Create a new order
#### JSON parameters
| FIELD | TYPE | DESCRIPTION | REQUIRED |
| ----- | ---- | ----------- | -------- |
| customer | Customer | Customer object | true |
| address | MovingAddress | Moving address object, contains from and to address | true |
| service | EOrderService | Order service enum | true |
| delivery | DateTime | Date and time | true |
| note | string | Note for the sales consultant for this order | false |

### Modify Order
#### `PUT` /api/orders/{order.id}
Modify an order
#### JSON parameters
| FIELD | TYPE | DESCRIPTION | REQUIRED |
| ----- | ---- | ----------- | -------- |
| customer | Customer | Customer object | true |
| address | MovingAddress | Moving address object, contains from and to address | true |
| service | EOrderService | Order service enum | true |
| delivery | DateTime | Date and time | true |
| note | string | Note for the sales consultant for this order | false |

### Delete Order
#### `DELETE` /api/orders/{order.id}
Delete an order
#### JSON parameters
| FIELD | TYPE | DESCRIPTION | REQUIRED |
| ----- | ---- | ----------- | -------- |
| id | int | Order id | true |