const addProductModel=require("../models/AddproductsModel");


module.exports={
    addProducts:async(body)=>{
        try {
           
            console.log("Received data in service:", body);
            const addproducts=await addProductModel.addProducts(body);
            console.log("product",addproducts);
            if(!addproducts){
                return "error"
            }
            return addproducts;
        } catch (error) {
            return error;
        }
    },
    
      
}