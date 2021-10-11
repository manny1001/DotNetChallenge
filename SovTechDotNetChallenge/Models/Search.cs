using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SovTechDotNetChallenge.Models
{
    public class SwapiResultRoot
    {
        public string name { get; set; }
        public string height { get; set; }
        public string mass { get; set; }
        public string hair_color { get; set; }
        public string skin_color { get; set; }
        public string eye_color { get; set; }
        public string birth_year { get; set; }
        public string gender { get; set; }
        public string homeworld { get; set; }
        public List<string> films { get; set; }
        public List<object> species { get; set; }
        public List<string> vehicles { get; set; }
        public List<string> starships { get; set; }
        public DateTime created { get; set; }
        public DateTime edited { get; set; }
        public string url { get; set; }
    }

    public class SwapiSearchRoot
    {
        public int count { get; set; }
        public object next { get; set; }
        public object previous { get; set; }
        public List<SwapiResultRoot> results { get; set; }
    }
    public class ChuckSearchResult
    {
        public List<string> categories { get; set; }
        public string created_at { get; set; }
        public string icon_url { get; set; }
        public string id { get; set; }
        public string updated_at { get; set; }
        public string url { get; set; }
        public string value { get; set; }
    }

    public class ChuckSearchRoot
    {
        public int total { get; set; }
        public List<ChuckSearchResult> result { get; set; }
    }
}