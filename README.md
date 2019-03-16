# The Moving Company

# Usage
## Steps
1. Build Angular application: `ng build`
2. Run .NET application `dotnet run`
3. Open browser and go to https://localhost:5001

# Known bugs
- [ ] Count of orders per customer on `/customers` goes to 0 if you go to `/customers` then to another page, then back. Not sure what causes this.

# Choices for the exercises
## Day 1
I haven't done any programming with .NET before, so it was brand new to me. I have been looking at a few tutorials and docs for this exercise, but I choose to follow the documents on APS.NET from Microsoft ([link](https://docs.microsoft.com/en-us/aspnet/core/tutorials/first-web-api?view=aspnetcore-2.2&tabs=visual-studio-code)). As it was pretty simple, and did the tasks I needed it to do.

These documentation was straight forward. And I am familiar to the MVC architecture so this went very good. Also familiar with C# from some Unity programming, and OOP-princibles from school (Java, C++, C#).

Started briefly on the Angular part. Where I found another tutorial ([link](https://medium.com/@levifuller/building-an-angular-application-with-asp-net-core-in-visual-studio-2017-visualized-f4b163830eaa)) on how I could build it into the wwwroot folder for the .NET application so it would run when I run the .NET application. This worked great straight out of the box, and I choose this solution because I only need to build the Angular project, and then run the .NET application (Looking for a way to build the Angular project as I run the .NET some way).

Not too known with the inside of Angular, but have read a few tutorials over the last few years to see what kind of framework this is, and what it is capable of. But think the component part of the framework will be easy to use for the second exercise.

Added Bootstrap as stying for the front-end application as I am very comfortable with this toolkit.



## Day 2
Added `Customer` to the API so with the same functions as Orders. So the front-end application would make more sense.

Have been working primarly with Angular, to learn the framework more, and get more comfortable with it.
### TODO
- [ ] Need to read up on converting HTML `date` to `DateTime` objects in the REST API.
- [ ] Check if customer exists before creating new order in the API

## Day 3

# API 
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
    }
]
```
### Get Order
#### `GET` /api/orders/{id}
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
}
```
### Add Order
#### `POST` /api/orders
Create a new order
#### JSON parameters
| FIELD       | TYPE     | DESCRIPTION |
| ----------- | -------- | ----------- |
| addressFrom | string   | ........... |
| addressTo   | string   | ........... |
| dueDate     | DateTime | ........... |
| created     | DateTime | ........... |
| service     | EService | ........... |
| note        | string   | ........... |
| customer    | Customer | ........... |

### Modify Order
#### `PUT` /api/orders/{id}
Modify an order
#### JSON parameters
| FIELD       | TYPE     | DESCRIPTION |
| ----------- | -------- | ----------- |
| addressFrom | string   | ........... |
| addressTo   | string   | ........... |
| dueDate     | DateTime | ........... |
| created     | DateTime | ........... |
| service     | EService | ........... |
| note        | string   | ........... |
| customer    | Customer | ........... |

### Delete Order
#### `DELETE` /api/orders/{id}
Delete an order

### Get All Customers
#### `GET` /api/customers
Return an array of `Customer` objects
#### Response example
```json
[
    {
        "id": 1,
        "name": "John Doe",
        "email": "john@doe.com",
        "phone": "+47 99 88 77 66"
    },
    {
        "id": 2,
        "name": "Jane Doe",
        "email": "jane@doe.com",
        "phone": "+47 45 23 44 87"
    }
]
```

### Get Customer
#### `GET` /api/customers/{id}
Returns a single `Customer` object
#### Response example
```json
{
    "id": 2,
    "name": "Jane Doe",
    "email": "jane@doe.com",
    "phone": "+47 45 23 44 87"
}
```

### Insert Customer
#### `POST` /api/customers
Create a new `Customer`
#### JSON parameters
| FIELD       | TYPE     | DESCRIPTION |
| ----------- | -------- | ----------- |
| name        | string   | ........... |
| email       | string   | ........... |
| phone       | string   | ........... |

### Modify Customer
#### `PUT` /api/customers/{id}
Modify a `Customer`
#### JSON parameters
| FIELD       | TYPE     | DESCRIPTION |
| ----------- | -------- | ----------- |
| id          | int      | ........... |
| name        | string   | ........... |
| email       | string   | ........... |
| phone       | string   | ........... |


### Delete Customer
#### `DELETE` /api/customers/{id}
Delete a customer

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