using System.Linq;
using TheMovingCompany.Models;

namespace TheMovingCompany.Repositories {
    public class OrderRepository {
        public readonly OrderContext _context;

        public OrderRepository(OrderContext context) {
            _context = context;

            if (_context.Orders.Count() == 0) {
                _context.Orders.Add(
                    new Order {
                        
                    }
                );
                _context.SaveChanges();
            }
        }
    }
}