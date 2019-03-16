using System;
using System.ComponentModel;

namespace TheMovingCompany.Models {
    public class Order {
        public long Id { get; set; }
        public string AddressFrom { get; set; }
        public string AddressTo { get; set; }
        public DateTime DueDate { get; set; }
        public DateTime Created { get; set; }
        public EService Service { get; set; }
        public string Note { get; set; }

        // Foreign key for Customer
        public long CustomerId { get; set; }
        public Customer Customer { get; set; }
    }


    public enum EService : byte {
        [Description("MOVING")]
        MOVING = 1,
        [Description("PACKING")]
        PACKING = 2,
        [Description("CLEANING")]
        CLEANING = 3,
    }
}