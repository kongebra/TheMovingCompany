using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
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
        }

        // GET: /api/orders
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Order>>> GetOrders() {
            // TODO (Svein): Make this return all Id's only (int-array)
            return await _context.Orders.ToListAsync();
        }

        // GET: /api/orders/{id}
        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<Order>> GetOrder(long id) {
            var item = await _context.Orders.FindAsync(id);

            if (item == null) {
                return NotFound();
            }

            return item;
        }

        // POST: /api/orders
        [HttpPost]
        public async Task<ActionResult<Order>> PostOrder(Order item) {
            _context.Orders.Add(item);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetOrder), new Order{ Id = item.Id }, item);
        }

        // PUT: /api/orders/{id}
        [HttpPut("{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> PutOrder(long id, Order item) {
            if (id != item.Id) {
                return BadRequest();
            }

            _context.Entry(item).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }

        // DELETE: /api/orders/{id}
        [HttpDelete("{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
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