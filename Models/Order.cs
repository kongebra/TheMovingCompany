using System;

namespace TheMovingCompany.Models {
    public class Order {
        public long Id { get; set; }
        public Customer Customer { get; set; }
        public Addresses Addresses { get; set; }
        public EOrderService Service { get; set; }
        public OrderDates Dates { get; set; }
    }

    public class OrderDates {
        public DateTime Created { get; set; }
        public DateTime Delivery { get; set; }
    }
}