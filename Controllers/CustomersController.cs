using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TheMovingCompany.Models;

namespace TheMovingCompany.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class CustomersController : ControllerBase {
        private readonly CustomerContext _context;

        public CustomersController(CustomerContext context) {
            _context = context;

            if (_context.Customers.Count() == 0) {
                _context.Customers.Add(
                    new Customer {
                        Name = "John Doe",
                        Email = "john@doe.com",
                        Phone = "+47 99 88 77 66",
                    }
                );
                _context.SaveChanges();
            }
        }

        // GET: api/customers
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Customer>>> GetCustomers() {
            return await _context.Customers.ToListAsync();
        }

        // GET: api/customers/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<Customer>> GetCustomer(long id) {
            var item = await _context.Customers.FindAsync(id);

            if (item == null) {
                return NotFound();
            }

            return item;
        }

        // POST: api/customers
        [HttpPost]
        public async Task<ActionResult<Customer>> PostCustomer(Customer item) {
            _context.Customers.Add(item);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetCustomer), new Customer{ Id = item.Id }, item);
        }

        // PUT: api/customers/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCustomer(long id, Customer item) {
            if (id != item.Id) {
                return BadRequest();
            }

            _context.Entry(item).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }

        // DELETE: api/customers/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCustomer(long id) {
            var item = await _context.Customers.FindAsync(id);

            if (item == null) {
                return NotFound();
            }

            _context.Customers.Remove(item);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}