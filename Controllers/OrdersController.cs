using Microsoft.AspNetCore.Mvc;
using System.Text.Encodings.Web;

namespace TheMovingCompany.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class OrdersController : Controller {
        private readonly OrderRepository _repository;

    }
}