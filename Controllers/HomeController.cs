using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MilliganNathanielAssignment1.Models;

namespace MilliganNathanielAssignment1.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            // throw new IndexOutOfRangeException();
            
            return View();
        }

        [HttpGet("Calculator")]
        public IActionResult Calculator()
        {
            return View();
        }

        [HttpPost("Calculator")]
        public IActionResult Calculator(CalculationModel model)
        {
            return View();
        }
    }
}
