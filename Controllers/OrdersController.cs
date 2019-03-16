using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TheMovingCompany.Models;

namespace TheMovingCompany.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class OrdersController : ControllerBase {
        private readonly OrderContext _context;

        public OrdersController(OrderContext context) {
            _context = context;

            // TODO (Svein): Remove when going live
            if (_context.Orders.Count() == 0) {
                _context.Orders.Add(
                    new Order {
                        AddressFrom = "Adolf Øiensveg 4B, 7036 Trondheim",
                        AddressTo = "Berghusvegen 10, 2815 Gjøvik",
                        DueDate = new System.DateTime(2019, 5, 17),
                        Created = System.DateTime.Now,
                        Service = EService.PACKING,
                        Note = "Lorem ipsum dolor sit amet.",
                        CustomerId = 1L,
                    }
                );
                _context.SaveChanges();
            }
        }

        // GET: api/orders
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Order>>> GetOrders() {
            return await _context.Orders.ToListAsync();
        }

        // GET: api/orders/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<Order>> GetOrder(long id) {
            var item = await _context.Orders.FindAsync(id);

            if (item == null) {
                return NotFound();
            }

            return item;
        }

        // POST: api/orders
        [HttpPost]
        public async Task<ActionResult<Order>> PostOrder(Order item) {
            item.Created = System.DateTime.Now; // Set current time
            _context.Orders.Add(item);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetOrder), new Order{ Id = item.Id }, item);
        }

        // PUT: api/orders/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> PutOrder(long id, Order item) {
            if (id != item.Id) {
                return BadRequest();
            }

            _context.Entry(item).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }

        // DELETE: api/orders/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteOrder(long id) {
            var item = await _context.Orders.FindAsync(id);

            if (item == null) {
                return NotFound();
            }

            _context.Orders.Remove(item);
            await _context.SaveChangesAsync();

            return NoContent();
        }

    }
}