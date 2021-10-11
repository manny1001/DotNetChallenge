using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SovTechDotNetChallenge.Models
{



    public class Chuck
    {
        public List<string> categories { get; set; }
        public string created_at { get; set; }
        public string icon_url { get; set; }
        public string id { get; set; }
        public string updated_at { get; set; }
        public string url { get; set; }
        public string value { get; set; }
    }
    public class JokeCategories
    {
        public List<string> MyArray { get; set; }
    }

    public class RandomJoke
    {
        public List<string> categories { get; set; }
        public string created_at { get; set; }
        public string icon_url { get; set; }
        public string id { get; set; }
        public string updated_at { get; set; }
        public string url { get; set; }
        public string value { get; set; }
    }


}