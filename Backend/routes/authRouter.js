const authController=require ("../controllers/authControllers");
const Router=require("express").Router();

Router.post("/signup",authController.signUp);



module.exports=Router;