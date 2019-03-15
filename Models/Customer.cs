using System.ComponentModel.DataAnnotations;

namespace TheMovingCompany.Models {
    public class Customer {
        public long Id { get; set; }
        
        [Required]
        public string Name { get; set; }
        
        [Required]
        public string Phone { get; set; }
        
        [Required]
        public string Email { get; set; }
    }
}