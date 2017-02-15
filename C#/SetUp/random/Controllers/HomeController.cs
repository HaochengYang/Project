using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace random.Controllers
{
    public class HomeController : Controller
    {
        // GET: /Home/
        [HttpGet]
        [Route("")]
        public IActionResult Index()
        {
             
            string PossibleCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
            string PassCode = "";
            Random Rand = new Random();
            for(int i = 0; i < 14; i++)
            {
                PassCode += PossibleCharacters[Rand.Next(0, PossibleCharacters.Length)];
            }
            ViewBag.PassCode = PassCode;

            return View();
        }
    }
}
