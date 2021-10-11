using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using SovTechDotNetChallenge.Models;
using RestSharp;
using System.Diagnostics;
using Newtonsoft.Json.Linq;
using System.Text.Json;
using System.Text.Json.Serialization;
using Newtonsoft.Json;
using System.Net.Http;
using System.Web.Http;
using System.Net;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using System.Web.Http;
using RouteAttribute = System.Web.Http.RouteAttribute;
using System.Net.Http;
using System.Net;
namespace SovTechDotNetChallenge.Controllers
{
    public class SwapiController : ApiController
    {
        [System.Web.Http.HttpGet]
        [Route("swapi/people")]
        public HttpResponseMessage People()
        {
            var restClient = new RestClient("https://swapi.dev/api/people");
            var request = new RestRequest(Method.GET);

            request.AddHeader("Cache-Control", "no-cache");
            request.AddHeader("Content-Type", "application/json");

            var restResponse = restClient.Execute(request);


            var JSON = JsonConvert.DeserializeObject<SwapiRoot>(restResponse.Content);


            return Request.CreateResponse(HttpStatusCode.OK, JSON, Configuration.Formatters.JsonFormatter);




        }


    }
}