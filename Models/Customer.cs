using System.Collections.Generic;

namespace TheMovingCompany.Models {
    public class Customer {
        public long Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }

        public ICollection<Order> Orders { get; set; }
    }
}