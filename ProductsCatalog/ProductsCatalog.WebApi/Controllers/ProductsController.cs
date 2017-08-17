using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.Mvc;
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
        public IEnumerable<Object> Get()
        {
            var products = db.Products.AsEnumerable();
            var categories = db.Categories.AsEnumerable();
            var images = db.Images.AsEnumerable();            
            var prod = categories.Join(products, c => c.ID, p => p.CategoryID, (c, p) => new { p.ID, p.Name, p.ProdDescripion, p.Category, p.Model, p.Price, c.Category1, c.CatDescription }).Join(images, p => p.ID, img => img.ProductID, (p, img) => new { p.Name, p.ProdDescripion, p.Model, p.Price, p.Category1, p.CatDescription, img.ImageURL }).ToList();
            return prod.ToList();
        }
    }
}