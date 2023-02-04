using Microsoft.AspNetCore.Mvc;
using Mission4.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mission4.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        // create get method
        [HttpGet]
        public IActionResult GradeCalc()
        {
            return View();
        }

        // create post method
        [HttpPost]
        public IActionResult GradeCalc(GradeModel model)
        {
            return View();
        }
    }
}
