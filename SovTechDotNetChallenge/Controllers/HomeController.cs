using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Configuration;

namespace SovTechDotNetChallenge.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {


            ViewBag.Title = "Home Page";


            var uri = new Uri(ConfigurationManager.AppSettings["BASEURI"]);
            var BASEURI = uri.ToString();


            return View((object)BASEURI);
        }
    }
}
