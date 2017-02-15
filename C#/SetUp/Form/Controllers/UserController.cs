using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
namespace YourNamespace.Controllers

{
    public class UserController : Controller
    {
        [HttpGet]
        [Route("")]
        public IActionResult index()
        {
         return View("index");
        }

        [HttpPost]
        [Route("UserInfo")]
        public IActionResult UserInfo(string UserFirstName, string UserLastName, int UserAge){
          ViewBag.UserFirstName = UserFirstName;
          ViewBag.UserLastName = UserLastName;
          ViewBag.UserAge = UserAge;
          return View("result");
        }
    }
}