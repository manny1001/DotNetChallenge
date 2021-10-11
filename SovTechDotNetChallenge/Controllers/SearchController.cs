using System;
using System.Web.Http;
using SovTechDotNetChallenge.Models;
using RouteAttribute = System.Web.Http.RouteAttribute;
using System.Net.Http;
using System.Net;
using RestSharp;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Diagnostics;

namespace SovTechDotNetChallenge.Controllers
{
    public class SearchController : ApiController
    {
        [System.Web.Http.HttpGet]
        [Route("Search/SearchChuck")]
        public HttpResponseMessage SearchChuck(string text)
        {

            var client = new RestClient("https://api.chucknorris.io/jokes/search?query=" + text);
            var request = new RestRequest(Method.GET);





            request.AddHeader("Cache-Control", "no-cache");
            request.AddHeader("Content-Type", "application/json");



            IRestResponse restResponse1 = client.Execute<ChuckSearchRoot>(request);



            var objResponse1 = JsonConvert.DeserializeObject<ChuckSearchRoot>(restResponse1.Content);




            //return Request.CreateResponse(HttpStatusCode.OK, objResponse1, Configuration.Formatters.JsonFormatter);
            return Request.CreateResponse(HttpStatusCode.OK, objResponse1, Configuration.Formatters.JsonFormatter);


        }
        [System.Web.Http.HttpGet]
        [Route("Search/SearchSwapi")]
        public HttpResponseMessage SearchSwapi(string text)
        {


            var client = new RestClient("https://swapi.dev/api/people/?search=" + text);
            var request = new RestRequest(Method.GET);




            request.AddHeader("Cache-Control", "no-cache");
            request.AddHeader("Content-Type", "application/json");

            IRestResponse restResponse = client.Execute<SwapiSearchRoot>(request);



            var objResponse = JsonConvert.DeserializeObject<SwapiSearchRoot>(restResponse.Content);


            //return Request.CreateResponse(HttpStatusCode.OK, objResponse1, Configuration.Formatters.JsonFormatter);
            return Request.CreateResponse(HttpStatusCode.OK, objResponse, Configuration.Formatters.JsonFormatter);


        }
    }
}
