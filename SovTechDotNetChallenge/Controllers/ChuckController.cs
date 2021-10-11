using System;
using System.Collections.Generic;
using System.Web.Mvc;
using RestSharp;
using SovTechDotNetChallenge.Models;
using Newtonsoft.Json;
using System.Threading.Tasks;
using System.Web.Http;
using RouteAttribute = System.Web.Http.RouteAttribute;
using System.Net.Http;
using System.Net;
using System.Web.Http.Cors;



namespace SovTechDotNetChallenge.Controllers
{


    public class ChuckController : ApiController
    {
        [EnableCors(origins: "https://localhost:44304/", headers: "*", methods: "*")]
        [System.Web.Http.HttpGet]
        [Route("chuck/categories")]
        public HttpResponseMessage Categories()
        {

            var client = new RestClient("https://api.chucknorris.io/jokes/categories");
            var request = new RestRequest(Method.GET);


            request.AddHeader("Cache-Control", "no-cache");
            request.AddHeader("Content-Type", "application/json");

            IRestResponse restResponse = client.Execute<JokeCategories>(request);


            var objResponse1 = JsonConvert.DeserializeObject<List<String>>(restResponse.Content);


            return Request.CreateResponse(HttpStatusCode.OK, objResponse1, Configuration.Formatters.JsonFormatter);

        }

        [System.Web.Http.HttpGet]
        [Route("chuck/random")]

        public HttpResponseMessage random(string category)
        {

            var client = new RestClient("https://api.chucknorris.io/jokes/random?category=" + category);
            var request = new RestRequest(Method.GET);


            request.AddHeader("Cache-Control", "no-cache");
            request.AddHeader("Content-Type", "application/json");

            IRestResponse restResponse = client.Execute<RandomJoke>(request);


            var objResponse1 = JsonConvert.DeserializeObject<RandomJoke>(restResponse.Content);


            return Request.CreateResponse(HttpStatusCode.OK, objResponse1, Configuration.Formatters.JsonFormatter);

        }
    }
}
