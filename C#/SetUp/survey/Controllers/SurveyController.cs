using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
namespace SurveyApplication.Controllers

{
    public class SurveyController : Controller
    {
        [HttpGet]
        [Route("")]
        public IActionResult index()
        {
         return View("index");
        }

        [HttpPost]
        [Route("Information")]
        public IActionResult Information(string UserName,string Location, string Language, string Comment){
          ViewBag.UserName = UserName;
          ViewBag.Location = Location;
          ViewBag.Language = Language;
          ViewBag.Comment = Comment;

          return View("result");
        }
    }
}