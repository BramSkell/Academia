using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.Http;
using System.Data.Entity;
using ProductsCatalog.WebApi.Models;
using System.Web.Http.Cors;


namespace ProductsCatalog.WebApi.Controllers
{
    [EnableCors(origins: "http://localhost:60140", headers: "*", methods: "*")]
    public class ProductsController : ApiController
    {
        private ProductsCatalogEntities db = new ProductsCatalogEntities();
        // GET: Products
        public IEnumerable<Product> Get()
        {
            var products = db.Products.AsEnumerable();
            return products.ToList();
        }
    }
}