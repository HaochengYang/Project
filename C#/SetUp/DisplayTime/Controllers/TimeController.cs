using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;

namespace DisplayTime.Controllers
{
    public class TimeController : Controller
    {
        [HttpGet]
        [Route("")]
        public IActionResult index()
        {
         DateTime CurrentTime = DateTime.Now;
         ViewBag.Time = CurrentTime.ToString("MMMM dd, yyyy hh:mm");
         return View("index");
        }
    }
}