using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using ProductsCatalog.AdminSite.Controllers;
using ProductsCatalog.AdminSite.Models;
using System.Web.Mvc;

namespace ProductsCatalog.AdminSite.UnitTest.Controllers
{
    [TestClass]
    public class ProductsControllerTest
    {
        [TestMethod]
        public void Index()
        {
            ProductsController pController = new ProductsController();
            ViewResult result = pController.Index() as ViewResult;
            Assert.IsNotNull(result);
        }
        [TestMethod]
        public void Details()
        {
            ProductsController pController = new ProductsController();
            ViewResult result = pController.Details(2) as ViewResult;
            Assert.IsNotNull(result);
        }
        [TestMethod]
        public void Create()
        {
            Product p = new Product() { Name = "asdfasdf", ProdDescripion = "adfasdfa", Model= "1312", Price= 123123, Keyword = "asdfasdf", CategoryID =2, Active = true };
            ProductsController pController = new ProductsController();
            ActionResult result = pController.Create(p) as ActionResult;
            Assert.IsNotNull(result);         
            //Assert.IsInstanceOfType(p, p.GetType());
        }
    }
}
