const addProductsController=require ("../controllers/addProductsController");
const Router=require("express").Router();

Router.post("/addproducts",addProductsController.addProducts);



module.exports=Router;