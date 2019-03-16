using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace TheMovingCompany.Models {
    public class Order {
        public long Id { get; set; }
        
        [Required]
        public string AddressFrom { get; set; }
        
        [Required]
        public string AddressTo { get; set; }
        
        [Required]
        [DataType(DataType.Date)]
        public DateTime DueDate { get; set; }

        public DateTime Created { get; set; }

        [Required]
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