# The Moving Company

# API Planning
Before starting the programming I want to make a layout of how I wish the REST API to be looking. Starting with the most basic (CRUD) so the sales consultant can see all orders, specific orders, update them, and delete them.

## Requests
### API Information
### Get All Orders
#### `GET` /api/orders
Returns an array of `Order` objects.
#### Response example
```json
[
    {
        "id": 1,
        "addressFrom": "Adolf Øiensveg 4B, 7036 Trondheim",
        "addressTo": "Berghusvegen 10, 2815 Gjøvik",
        "dueDate": "2019-05-17T00:00:00",
        "created": "2019-03-16T01:02:20.0989325+01:00",
        "service": 2,
        "note": "Lorem ipsum dolor sit amet.",
        "customerId": 1,
        "customer": {
            "id": 1,
            "name": "John Doe",
            "email": "john@doe.com",
            "phone": "+47 99 88 77 66"
        }
    }
]
```
### Get Order
#### `GET` /api/orders/{order.id}
Returns a single `Order` object
#### Response example
```json
{
    "id": 1,
    "addressFrom": "Adolf Øiensveg 4B, 7036 Trondheim",
    "addressTo": "Berghusvegen 10, 2815 Gjøvik",
    "dueDate": "2019-05-17T00:00:00",
    "created": "2019-03-16T01:02:20.0989325+01:00",
    "service": 2,
    "note": "Lorem ipsum dolor sit amet.",
    "customerId": 1,
    "customer": {
        "id": 1,
        "name": "John Doe",
        "email": "john@doe.com",
        "phone": "+47 99 88 77 66"
    }
}
```
### Add Order
#### `POST` /api/orders
Create a new order
#### JSON parameters
| FIELD       | TYPE     | DESCRIPTION | REQUIRED |
| ----------- | -------- | ----------- | -------- |
| addressFrom | string   | ........... | true     |
| addressTo   | string   | ........... | true     |
| dueDate     | DateTime | ........... | true     |
| created     | DateTime | ........... | true     |
| service     | EService | ........... | true     |
| note        | string   | ........... | false    |
| customer    | Customer | ........... | true     |

### Modify Order
#### `PUT` /api/orders/{order.id}
Modify an order
#### JSON parameters
| FIELD       | TYPE     | DESCRIPTION | REQUIRED |
| ----------- | -------- | ----------- | -------- |
| addressFrom | string   | ........... | true     |
| addressTo   | string   | ........... | true     |
| dueDate     | DateTime | ........... | true     |
| created     | DateTime | ........... | true     |
| service     | EService | ........... | true     |
| note        | string   | ........... | false    |
| customer    | Customer | ........... | true     |

### Delete Order
#### `DELETE` /api/orders/{order.id}
Delete an order
#### JSON parameters
| FIELD | TYPE | DESCRIPTION | REQUIRED |
| ----- | ---- | ----------- | -------- |
| id    | long | Order id    | true     |

# Angular
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).